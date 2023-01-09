import styles from "./styles.module.scss";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import {
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsSnapchat,
} from "react-icons/bs";
import Link from "next/link";

const socialIcons = [
  {
    id: 1,
    icon: <FaFacebookF/>,
  },
  {
    id: 2,
    icon: <BsInstagram/>,
  },
  {
    id: 3,
    icon:<BsTwitter/>,
  },
  {
    id: 4,
    icon: <BsYoutube/>,
  },
  {
    id: 5,
    icon: <BsPinterest/>,
  },
  {
    id: 6,
    icon: <BsSnapchat/>,
  },
  {
    id: 7,
    icon: <FaTiktok/>,
  },
];
const Socials = () => {
  return (
    <div className={styles.footer__container__socials}>
      <h3 className={styles.footer__container__socials__heading}>STAY CONNECTED</h3>
      <ul className={styles.footer__container__socials__list}>
        {socialIcons.map((socialIcon) => (
          <li
            key={socialIcon.id}
            className={styles.footer__container__socials__list__item}
          >
            <Link href="/"> {socialIcon.icon} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
