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
    .then((data) => {console.log(data)
setLoader(false)
    }
)
.catch((err) => {
    setError("https://media.tenor.com/qsthhHhdjsQAAAAM/error-windows.gif")
})
},[])
  return (
    <main>
      {/* Навигационные кнопки */}
      <div className="join px-4 lg:px-16 mt-5 gap-2 flex flex-wrap justify-center items-center">
        <button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg m-1">
          <Link to={"/electronic"}>Elektronika</Link>
        </button>
        <button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg m-1">
          <Link to={"/tech"}>Maishiy texnika</Link>
        </button>
        <button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg m-1">
          <Link to={"/clothing"}>Kiyim</Link>
        </button>
        <button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg m-1">
          <Link to={"/shoes"}>Poyabzal</Link>
        </button>
        <button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg m-1">
          <Link to={"/health"}>Salomatlik</Link>
        </button>
      </div>

      {/* Раздел с продуктами */}
      <section className="px-4 lg:px-16 mt-12">
        <a href="#" className="flex items-center gap-2">
          <p className="text-2xl font-bold">Mashhur</p>
          <img src={rightIcon} alt="right" className="w-5 mt-1" />
        </a>

        {/* Грид для карточек */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-3">
          {loader ?  [... new Array(20)].map(() => <CardSkeleton/>) : products.map((item) => (
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
