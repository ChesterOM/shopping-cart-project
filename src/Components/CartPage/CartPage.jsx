import NavBar from "../Navbar/Navbar";
import styles from "./CartPage.module.css"
import PropTypes from "prop-types"

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
    return (
        <div className={styles.cartPage}>
            <NavBar />
            {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                    <button onClick={() => removeFromCart(item.id)} className={styles.removeItemButton}>
                        <img src="/path/to/delete-icon.svg" alt="Remove" /> {/* Adjust path to your delete icon */}
                    </button>
                    <img src={item.image} alt={item.title} className={styles.cartItemImage} />
                    <div className={styles.itemTitle}>{item.title}</div>
                    {/* Since you're ignoring prices, the itemPrice div is omitted */}
                    <div className={styles.itemQuantity}>
                        <input
                          type="number"
                          className={styles.quantityInput}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, e.target.value)}
                        />
                    </div>
                    {/* The itemSubtotal div is also omitted as per instructions */}
                </div>
            ))}
        </div>
    );
};

CartPage.propTypes = {
    cartItems: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func,
    updateQuantity: PropTypes.func,
}

export default CartPage