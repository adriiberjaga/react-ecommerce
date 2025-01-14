import styles from "./ProductDetail.module.css";
import { Link, useParams } from "react-router-dom";
import useFetch from "../data/use-fetch";
import { Product } from "../data/use-fetch";
import { useState } from "react";
import { useCart } from '../data/CartContext'; // Añade esta importación

function ProductDetail() {
    const { id } = useParams();
    const product = useFetch<Product>(`https://fakestoreapi.com/products/${id}`);
    const [isAdded, setIsAdded] = useState(false);
    const { agregarItem } = useCart(); // Usa el hook del contexto

    const addCard = () => {
        if (!product) return;

        // Usar el método del contexto en lugar de localStorage
        if (product.id !== undefined) {
            agregarItem({
                id: product.id,
                nombre: product.title || '',
                precio: product.price ?? 0,
                imagen: product.image
            });
        }

        // Mantener el mismo feedback visual
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.productDetail}>
            <div className={styles.productDetail__container}>
                <img className={styles.productDetail__img} src={product.image} alt={product.title} />
                <div className={styles.productDetail__info}>
                    <h1 className={styles.productDetail__title}>{product.title}</h1>
                    <p className={styles.productDetail__description}>{product.description}</p>
                    <p className={styles.productDetail__price}>${product.price}</p>
                    <div className={styles.button}>
                        <button
                            onClick={addCard}
                            className={`${styles.productDetail__carrito} ${isAdded ? styles.added : ''}`}
                        >
                            {isAdded ? '¡Añadido!' : 'Añadir al carrito'}
                        </button>
                        <Link to="/products" className={styles.productDetail__back}>
                            Volver a productos
                        </Link>
                    </div>
                    {isAdded && (
                        <p className={styles.addedMessage}>¡Producto añadido al carrito!</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;