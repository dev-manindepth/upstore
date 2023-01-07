import styles from "./styles.module.scss";
import { BiShieldQuarter } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

import { use, useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__container}>
        <ul className={styles.navbar__container__list}>
          <li
            className={`${styles.navbar__container__list__items} ${styles.country}`}
          >
            <div className={styles.country__symbol}>🇮🇳</div>
            <div>
              <span className={styles.country__name}>India </span>
              <span className={styles.country__seperator}>/</span>{" "}
              <span className={styles.country__currency}>INR</span>
            </div>
          </li>
          <li className={styles.navbar__container__list__items}>
            <BiShieldQuarter />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.navbar__container__list__items}>
            <span>Customer Service</span>
          </li>
          <li className={styles.navbar__container__list__items}>
            <span>Help</span>
          </li>
          <li className={styles.navbar__container__list__items}>
            <FaRegHeart />
            <span className={styles.wishlist}>Wishlist</span>
          </li>
          <li
            className={`${styles.navbar__container__list__items}`}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {loggedIn ? (
              <div className={styles.profile}>
                <img
                  src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                  alt="profile image"
                  className={styles.profile__image}
                />
                <span className={styles.profile__name}>Manish</span>
                <BiChevronDown className={styles.profile__dropdown} />
              </div>
            ) : (
              <div className={styles.profile}>
                <CgProfile />
                <span className={styles.profile__name}>Account</span>
                <BiChevronDown className={styles.profile__dropdown} />
              </div>
            )}
            {visible && (
              <div className={styles.user}>
                <h4>Welcome to upstore</h4>
                {loggedIn ? (
                  <div className={styles.user__details}>
                    <img
                      src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                      alt="profile image"
                      className={styles.user__details__image}
                    />
                    <div>
                      <p>Welcome back</p>
                      <h3 className={styles.user__details__name}>Manish</h3>
                      <Link href="/signout" className={styles.signout}>
                        Sign out
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className={styles.button}>
                    <button className={styles.button__primary}>
                      <Link href="/register">Register</Link>{" "}
                    </button>
                    <button className={styles.button__secondary}>
                      <Link href="/login">Login</Link>
                    </button>
                  </div>
                )}
                <ul className={styles.user__menu}>
                  <li className={styles.user__menu__list}>
                    <Link href="/profile">Account</Link>
                  </li>
                  <li className={styles.user__menu__list}>
                    <Link href="/profile/orders">My Orders</Link>
                  </li>
                  <li className={styles.user__menu__list}>
                    <Link href="/profile/message">Message Center</Link>
                  </li>
                  <li className={styles.user__menu__list}>
                    <Link href="/profile/address">Address</Link>
                  </li>
                  <li className={styles.user__menu__list}>
                    <Link href="/profile/wishlist">Wishlist</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
