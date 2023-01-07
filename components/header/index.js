import NavAction from "./NavAction";
import Navbar from "./Navbar";
import Promotion from "./Promotion";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Promotion />
      <Navbar/>
      <NavAction/>
    </header>
  );
};

export default Header;
