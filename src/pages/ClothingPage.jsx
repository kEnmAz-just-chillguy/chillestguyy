import rightIcon from "../assets/icons8-right-90.png";
import star from "../assets/icons8-star-96.png";
import cardIcon from "../assets/icons8-fast-cart-96.png";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function ClothingPage({ products, addToBasket }) {
  return (
    <main>
 
      <section className="ml-50 p-4">
    
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-3">
          {products
            .filter((item) => item.type === "fizzy-drink")
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

export default ClothingPage;
