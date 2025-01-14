import { NavLink } from "react-router-dom";
import logo from "../assets/descarga.png";
import styles from "./Header.module.css";
import { useState } from "react";
import { useCart } from "../data/CartContext";

export function Header() {
  const [isOpen, setIsOpen] = useState(false); // Añadimos el estado
  const { items } = useCart();
  function toggleMenu() {
    setIsOpen(!isOpen); // Cambiamos el estado entre true y false
  }

  return (
    <>
      <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
        <p className={styles.imgLogo}>Your Logo</p>
        <button
          id={styles.button}
          onClick={toggleMenu}
          className={styles.button}
        >
          {isOpen ? "X" : "≡"}
        </button>
        <nav className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
          <NavLink
            to=""
            className={({ isActive }) =>
              `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
                isActive ? "border-white" : "border-transparent"
              }`
            }
          >
            Home{" "}
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
                isActive ? "border-white" : "border-transparent"
              }`
            }
          >
            Productos{" "}
          </NavLink>
          <NavLink
            to="carrito"
            className={({ isActive }) =>
              ` text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
                isActive ? "border-white" : "border-transparent"
              }`
            }
          >
          Carrito {' '}

          </NavLink>
        </nav>
      </header>
    </>
  );
}
