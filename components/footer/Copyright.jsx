import Link from "next/link";
import styles from "./styles.module.scss";
import { IoLocationSharp } from "react-icons/io5";

const copyrights = [
  {
    name: "Privacy Center",
    link: "/",
  },
  {
    name: "Privacy & Cookie Policy",
    link: "/",
  },
  {
    name: "Manage Cookies",
    link: "/",
  },
  {
    name: "Terms & Conditions",
    link: "/",
  },
  {
    name: "Copyright Notice",
    link: "/",
  },
];
const Copyright = () => {
  return (
    <div className={styles.footer__container__copyright}>
      <h3 className={styles.footer__container__copyright__heading}>
        &copy;2023 upstore All Rights Reserved
      </h3>
      <ul className={styles.footer__container__copyright__list}>
        {copyrights.map((copyright) => (
          <li
            className={styles.footer__container__copyright__list__item}
            key={copyright.name}
          >
            <Link href={copyright.link}>{copyright.name}</Link>{" "}
          </li>
        ))}
        <li className={styles.footer__container__copyright__list__item}>
          <IoLocationSharp />
          <span>India</span>
       
        </li>
      </ul>
    </div>
  );
};

export default Copyright;
