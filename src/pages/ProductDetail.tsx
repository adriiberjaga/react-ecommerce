import styles from "./ProductDetail.module.css";
import { Link, useParams } from "react-router-dom";
import useFetch from "../data/use-fetch";
import { Product } from "../data/use-fetch";
import { useState } from "react";

function ProductDetail() {
    const { id } = useParams();
    const product = useFetch<Product>(`https://fakestoreapi.com/products/${id}`);
    const [isAdded, setIsAdded] = useState(false); // Estado para feedback visual

    const addCard = () => {
        if (!product) return;

        // Obtener el carrito actual del localStorage
        const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');

        // Verificar si el producto ya está en el carrito
        const existingProduct = currentCart.find((item: Product) => item.id === product.id);

        let newCart;
        if (existingProduct) {
            // Si el producto ya existe, incrementar la cantidad
            newCart = currentCart.map((item: Product) => 
                item.id === product.id 
                    ? { ...item, quantity: (item.quantity || 1) + 1 }
                    : item
            );
        } else {
            // Si el producto no existe, añadirlo con cantidad 1
            newCart = [...currentCart, { ...product, quantity: 1 }];
        }

        // Guardar el nuevo carrito en localStorage
        localStorage.setItem('cart', JSON.stringify(newCart));

        // Feedback visual
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000); // Reset después de 2 segundos
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