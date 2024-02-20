import PropTypes from "prop-types"
import styles from "./CartIcon.module.css"

const CartIcon = ({ cartItems }) => {
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    
    return (
        <div className={styles.cartIcon}>
               <span>{itemCount}</span>
        </div>
    )
}

CartIcon.propTypes = {
    cartItems: PropTypes.array,
}

export default CartIcon