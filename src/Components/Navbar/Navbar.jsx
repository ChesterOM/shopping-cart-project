import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const NavBar = () => {
    return (
        <div className={styles.navBar}>
          <nav>
            <Link className={styles.link} to="/homepage">Shop</Link>
            <Link className={styles.link} to="/cart">Cart</Link>
          </nav>

        </div>
    )

}

export default NavBar