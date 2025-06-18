import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";
import ElectronicPage from "./pages/ElectronicPage";
import TechPage from "./pages/TechPage";
import ClothingPage from "./pages/ClothingPage";
import ShoesPage from "./pages/ShoesPage";
import HealthPage from "./pages/HealthPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const [basket, setBasket] = useState([]);
  const [products, setProducts] = useState([]);
  const [saved, setSaved] = useState([])
  const [mainPrice,setMainPrice] = useState(0)
 

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("basket");
    if (saved) {
      setBasket(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const totalPrice = basket.reduce((sum, item) => sum + parseFloat(item.price), 0);
    setMainPrice(totalPrice);
  }, [basket]);

  const addToBasket = (item) => {
    const newBasket = [...basket, item];
    setBasket(newBasket)
    localStorage.setItem("basket",JSON.stringify(newBasket))
    setSaved(JSON.parse(localStorage.getItem("basket")))
  };

  return (
    <>
      <Navbar basket={basket.length} basketList={basket} mainPrice={mainPrice} />

      <Routes>
        <Route
          path="/"
          element={<HomePage products={products} addToBasket={addToBasket} />}
        />
        <Route path="/detail/:id" element={<ProductsDetailsPage />} />
        <Route
          path="/water"
          element={
            <ElectronicPage products={products} addToBasket={addToBasket} />
          }
        />
        <Route
          path="/energetic"
          element={<TechPage products={products} addToBasket={addToBasket} />}
        />
        <Route
          path="/fizzy-drink"
          element={
            <ClothingPage products={products} addToBasket={addToBasket} />
          }
        />
        <Route
          path="/chips"
          element={<ShoesPage products={products} addToBasket={addToBasket} />}
        />
        <Route
          path="/chocolate"
          element={<HealthPage products={products} addToBasket={addToBasket} />}
        />
        <Route  path="/inut" element={<SignUpPage/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
