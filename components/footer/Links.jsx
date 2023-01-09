import Link from "next/link";
import styles from "./styles.module.scss";

const links = [
  {
    heading: "SHOPPAY",
    links: [
      {
        name: "About us",
        link: "",
      },
      {
        name: "Contact us",
        link: "",
      },
      {
        name: "Social Responsibility",
        link: "",
      },
      {
        name: "",
        link: "",
      },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      {
        name: "Shipping Info",
        link: "",
      },
      {
        name: "Returns",
        link: "",
      },
      {
        name: "How To Order",
        link: "",
      },
      {
        name: "How To Track",
        link: "",
      },
      {
        name: "Size Guide",
        link: "",
      },
    ],
  },
  {
    heading: "CUSTOMER SERVICE",
    links: [
      {
        name: "Customer service",
        link: "",
      },
      {
        name: "Terms and Conditions",
        link: "",
      },
      {
        name: "Consumers (Transactions)",
        link: "",
      },
      {
        name: "Take our feedback survey",
        link: "",
      },
    ],
  },
];
const Links = () => {
  return (
    <div className={styles.footer__container__links}>
      {links.map((link, i) => (
        <ul className={styles.footer__container__links__list}>
          {i == 0 ? <img src="/logo.png" alt="" /> : <b>{link.heading}</b>}
          {link.links.map((link) => (
            <li
              key={link.name}
              className={styles.footer__container__links__list__item}
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Links;
