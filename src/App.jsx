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

function App() {
  const [basket, setBasket] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  return (
    <>
      <Navbar basket={basket.length} basketList={basket} />

      <Routes>
        <Route
          path="/"
          element={<HomePage products={products} addToBasket={addToBasket} />}
        />
        <Route path="/detail/:id" element={<ProductsDetailsPage />} />
        <Route
          path="/electronic"
          element={
            <ElectronicPage products={products} addToBasket={addToBasket} />
          }
        />
        <Route
          path="/tech"
          element={<TechPage products={products} addToBasket={addToBasket} />}
        />
        <Route
          path="/clothing"
          element={
            <ClothingPage products={products} addToBasket={addToBasket} />
          }
        />
        <Route
          path="/shoes"
          element={<ShoesPage products={products} addToBasket={addToBasket} />}
        />
        <Route
          path="/health"
          element={<HealthPage products={products} addToBasket={addToBasket} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
