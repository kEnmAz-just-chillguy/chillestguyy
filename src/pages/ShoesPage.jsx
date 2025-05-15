import rightIcon from "../assets/icons8-right-90.png";
import star from "../assets/icons8-star-96.png";
import cardIcon from "../assets/icons8-fast-cart-96.png";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function ShoesPage({ products, addToBasket }) {
  return (
    <main>
            <div className="join px-4 lg:px-16 mt-5 gap-2 flex flex-wrap justify-center items-center ">
        <button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg">
        <Link to={"/electronic"}>Elektronika</Link>
        </button>
        <button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg">
            <Link to={"/tech"}>Maishiy texnika </Link>
        </button>
        <button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg">
            <Link to={"/clothing"}> Kiyims</Link>
        </button>
        <button className="btn btn-sm join-item bg-purple-800 text-white rounded-lg">
          <Link to={"/shoes"}>  Poyabzal </Link>
        </button>
        <button className="btn btn-sm join-item bg-purple-400 text-white rounded-lg">
           <Link to={"/health"}> Salomatlik </Link>
        </button>
      </div>


      <section className="px-65 mt-12">
        <a href="#" className="flex items-center gap-2">
          <p className="text-2xl font-bold">Mashhur</p>
          <img src={rightIcon} alt="right" className="w-5 mt-1" />
        </a>

        <div className="grid grid-cols-5 gap-3 mt-3"> 
            {products.filter((item) => item.type === "shoes").map((item) => (
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

export default ShoesPage;
