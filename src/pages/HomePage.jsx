import rightIcon from "../assets/icons8-right-90.png";
import star from "../assets/icons8-star-96.png";
import cardIcon from "../assets/icons8-fast-cart-96.png";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import CardSkeleton from "../components/Loader";

function HomePage({ products, addToBasket }) {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    fetch("/data/products.json")
    .then((res) => res.json())
    .then((data) => {
setLoader(false)
    }
)
.catch((err) => {
    setError("https://media.tenor.com/qsthhHhdjsQAAAAM/error-windows.gif")
})
},[])
  return (
    
    <main className=" ">
     
    <section className="ml-50 p-4">
    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-3">
        {loader
          ? [...new Array(20)].map((_, i) => <CardSkeleton key={i} />)
          : products.map((item) => (
              <Card
                key={item.id}
                star={star}
                cardIcon={cardIcon}
                title={item}
                addToBasket={addToBasket}
              />
            ))}
      </div>
    </section>
  </main>
  );
}

export default HomePage;
