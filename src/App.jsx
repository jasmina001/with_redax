// src/App.jsx
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

const App = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={`app ${theme === "dark" ? "dark" : "light"}`}>
      <Navbar />
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
};

export default App;
