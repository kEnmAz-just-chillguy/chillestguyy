import rightIcon from "../assets/icons8-right-90.png";
import star from "../assets/icons8-star-96.png";
import cardIcon from "../assets/icons8-fast-cart-96.png";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function ElectronicPage({ products, addToBasket }) {
  return (
    <main>
      <div className="join px-4 lg:px-16 mt-5 gap-2 flex flex-wrap justify-center items-center ">
      <button className="btn btn-sm join-item bg-purple-800 text-white rounded-lg">
  <Link to={"/water"}>Water</Link>
</button>
<button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg">
  <Link to={"/energetic"}>Energetic</Link>
</button>
<button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg">
  <Link to={"/fizzy-drink"}>Fizzy-drink</Link>
</button>
<button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg">
  <Link to={"/chips"}>Chips</Link>
</button>
<button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg">
  <Link to={"/chocolate"}>Chocolate</Link>
</button>
      </div>

      <section className="px-4 sm:px-16 mt-12">
        <a href="#" className="flex items-center gap-2">
          <p className="text-2xl font-bold">Mashhur</p>
          <img src={rightIcon} alt="right" className="w-5 mt-1" />
        </a>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-3">
          {products
            .filter((item) => item.type === "water")
            .map((item) => (
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

export default ElectronicPage;
