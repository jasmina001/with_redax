
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: theme === "dark" ? "#333" : "#f2f2f2",
      }}
    >
      <h1>My Shop</h1>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
     
        <button
          onClick={() => dispatch(toggleTheme())}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
            color: theme === "dark" ? "white" : "black",
          }}
          title="Toggle theme"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
        <span style={{ fontSize: "22px" }}>🛒 {totalQuantity}</span>
      </div>
    </nav>
  );
};

export default Navbar;
