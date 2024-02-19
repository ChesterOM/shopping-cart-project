import NavBar from "../Navbar/Navbar.jsx";
import styles from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <NavBar />
            <h1>HOMEPAGE</h1>
        </div>
    )
};

export default HomePage