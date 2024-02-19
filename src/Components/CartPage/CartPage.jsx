import NavBar from "../Navbar/Navbar";
import styles from "./CartPage.module.css"


const CartPage = () => {
    return (
        <div className={styles.cartPage}>
            <NavBar />
            <h1>Cart Page</h1>
        </div>
    )
};

export default CartPage