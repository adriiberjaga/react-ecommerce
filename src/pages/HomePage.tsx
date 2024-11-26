import { Link } from "react-router-dom";
import useFetch, { Product } from "../data/use-fetch";
import styles from "./HomePage.module.css";

function HomePage() {
  const products = useFetch<Product[]>(
    "https://fakestoreapi.com/products?limit=12"
  );

  // Lista de IDs que deseas mostrar
  const idsToShow = [1, 3, 5, 9]; // Aquí puedes agregar los IDs que deseas mostrar

  // Filtrar productos solo si `products` no es undefined
  const filteredProducts = products?.filter(product =>
    product.id !== undefined && idsToShow.includes(product.id)
  );

  return (
    <div className={styles.homepage}>
      <h1>Bienvenido a mi pagina de ecommerce</h1>
      <div className={styles.destacados}>
        <h3>Productos más destacados de esta semana..</h3>
        <div className={styles.products}>
          {filteredProducts?.map((product) => (
            <div key={product.id} className={styles.productList__li}>
              <img
                className={styles.productList__img}
                src={product.image}
                alt={product.title}
              />
              <p className={styles.productList__p}>{product.title}</p>
              <button className={styles.productList__button}> <Link to={`products/${product.id}`}> Ver más</Link></button>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
