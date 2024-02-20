import PropTypes from "prop-types"
import styles from "./ProductCard.module.css"

const ProductCard = ( { product, onAddToCart }) => {
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <div className={styles.content}>
                <h2 className={styles.title}>{product.title}</h2>
                <p className={styles.description}>{product.description}</p>
                <button onClick={onAddToCart} className={styles.addButton}>Add To Cart</button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string,
    }).isRequired,

    onAddToCart: PropTypes.func.isRequired
}


export default ProductCard