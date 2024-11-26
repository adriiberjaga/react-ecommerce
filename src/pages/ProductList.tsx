import { Link } from "react-router-dom";
import useFetch, { Product } from "../data/use-fetch";
import styles from "./ProductList.module.css";

function ProductList() {
    const products = useFetch<Product[]>("https://fakestoreapi.com/products?limit=12");

  if (!products || products.length === 0){
    return(
        <div className={styles.loading}>Loading...</div>
    )
  }

  return (
    <div className={styles.content}>
    <h1 className={styles.title}>Nuestro catalogo</h1>
    <ul className={styles.productList__ul}>
        {products.map((product) => (
          <>
            <li className={styles.productList__li} key={product.id}>
            <img className={styles.productList__img} src={product.image} alt="" />
            <p className={styles.productList__p}>{product.title}</p>
            <button className={styles.productList__button}> <Link to={`${product.id}`}> Ver más</Link></button>
            </li>

          </>  
        ))}
      </ul>
    </div>
      
  );
}

export default ProductList;
