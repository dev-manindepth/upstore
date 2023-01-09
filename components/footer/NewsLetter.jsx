import styles from "./styles.module.scss";
import Link from "next/link";

const NewsLetter = () => {
  return (
    <div className={styles.footer__container__newsletter}>
      <div>
        <h3 className={styles.footer__container__newsletter__heading}>
          SIGN UP FOR OUR NEWSLETTER
        </h3>

        <div className={styles.footer__container__newsletter__input}>
          <input type="text" placeholder="Your email address" />
          <button className={styles.button__primary}>SUBSCRIBE</button>
        </div>
        <div className={styles.footer__container__newsletter__privacy}>
          By clicking the SUBSCRIBE button , you are agreeing to{" "}
          <span
            className={styles.footer__container__newsletter__privacy__policy}
          >
            <Link href="/">Our Privacy & Cookie Policy</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
