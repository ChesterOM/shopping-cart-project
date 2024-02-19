import { useEffect, useState } from "react";
import NavBar from "../Navbar/Navbar.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./HomePage.module.css"

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Failed to fetch products", error));
    }, [])
    
    
    return (
        <div className={styles.homePage}>
            <NavBar />
            <h1>HOMEPAGE</h1>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
};

export default HomePage