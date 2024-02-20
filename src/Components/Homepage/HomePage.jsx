import NavBar from "../Navbar/Navbar.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./HomePage.module.css"
import PropTypes from "prop-types"

const HomePage = ({ products, addToCart}) => {
    return (
        <div className={styles.homePage}>
            <NavBar />
            <div className={styles.productsContainer}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)}/>
                ))}
            </div>
        </div>
    )
};

HomePage.propTypes = {
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
}

export default HomePage