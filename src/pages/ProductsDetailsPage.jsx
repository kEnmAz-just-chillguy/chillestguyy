import { useParams } from "react-router-dom";
import rightIcon from "../assets/icons8-right-90.png";
import star from "../assets/icons8-star-96.png";
import cardIcon from "../assets/icons8-fast-cart-96.png";
import Like from "../components/Like";
import { useEffect, useState } from "react";

function ProductsDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const realData = data.find((item) => item.id == id);
        if (realData) {
          setProduct(realData);
        } else {
          setError("Product not found");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load product data");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="flex flex-col lg:flex-row px-4 lg:px-16 mt-12 gap-12">
      <div className="flex justify-center lg:w-1/2">
        <img
          className="hover:scale-105 transition duration-200 ease-in-out"
          width={"100%"}
          src={product.img}
          alt={product.name}
        />
      </div>

      <div className="h-max max-w-sm mx-auto border border-gray-300 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-semibold text-green-500 mb-2">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>

        <div className="flex items-baseline space-x-2 mb-4">
          <span className="text-xl text-green-600 font-bold">{product.price}</span>
        </div>

        <div className="flex gap-5">
          <button className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
            Purchase
          </button>
          <Like />
        </div>
      </div>
    </main>
  );
}

export default ProductsDetailsPage;
