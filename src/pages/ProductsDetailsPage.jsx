import { useParams } from "react-router-dom";
import rightIcon from "../assets/icons8-right-90.png";
import star from "../assets/icons8-star-96.png";
import cardIcon from "../assets/icons8-fast-cart-96.png";
import Like from "../components/Like";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  function StarIcon({ className }) {
    return (
      <svg className={className} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  }
  
  function ShareIcon({ className }) {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    )
  }

  return (
    <main className="flex flex-col lg:flex-row min-h-screen items-center justify-center    px-4 lg:px-16 py-12 gap-8 lg:gap-16">
  
    <div className=" flex flex-col lg:flex-row gap-8 rounded-3xl gap-50">
      <div className="flex-1 flex flex-col rounded-3xl">
        <div className="relative rounded-2xl w-full max-w-lg aspect-square p-6  transition-all duration-500">
          <img
            className="w-full h-full rounded-3xl  transition-transform duration-700 hover:scale-105"
            src={product.img}
            alt={product.name}
          />
        </div>
      </div>

      <div className="flex-shrink-0 w-full lg:w-96">
        <div className=" rounded-3xl p-8  transition-shadow duration-300 ">
     

          <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(Math.round(product.rate))].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.rateCount} sharhlar)</span>
          </div>

          <p className="text-gray-700 mb-6 font-medium text-xl leading-relaxed">{product.description}</p>

          <div className="mb-8">
            <span className="text-3xl font-extrabold text-green-600">{product.price.toLocaleString()} so'm</span>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              Sotib olish
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <Like className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <ShareIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  // You would need these icon components (or replace with your own)
 
  );
}

export default ProductsDetailsPage;
