import styles from "./styles.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
const NavAction = () => {
  return (
    <div className={styles.action}>
      <div className={styles.action__container}>
          <Link href='/'>
        <img src="../../logo.png" alt="" className={styles.brand__logo} />
          </Link>
        <div className={styles.action__search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.action__search__icon}>
            <FiSearch />
          </div>
        </div>
        <Link href='/cart' className={styles.action__cart}>
          <AiOutlineShoppingCart />
          <span className={styles.action__cart__item__count}>1</span>
        </Link>
      </div>
    </div>
  );
};

export default NavAction;
