import styles from "./styles.module.scss";

const paymentCompany = [
  {
    id: 1,
    imgSrc: "razorpay",
    alt: "razorpay",
  },
  {
    id: 2,
    imgSrc: "visa",
    alt: "visa",
  },
  {
    id: 3,
    imgSrc: "paypal",
    alt: "paypal",
  },
  {
    id: 4,
    imgSrc: "american_express",
    alt: "american_express",
  },
  {
    id: 5,
    imgSrc: "mastercard",
    alt: "mastercard",
  },
  {
    id: 6,
    imgSrc: "maestro",
    alt: "maestro",
  },
  {
    id: 7,
    imgSrc: "cb",
    alt: "cb",
  },

  {
    id: 8,
    imgSrc: "jcb",
    alt: "jcb",
  },
];
const Payment = () => {
  return (
    <div className={styles.footer__container__payment}>
      <h3 className={styles.footer__container__payment__heading}>WE ACCEPT</h3>
      <ul className={styles.footer__container__payment__list}>
        {paymentCompany.map((company) => (
          <li
            key={company.id}
            className={styles.footer__container__payment__list__item}
          >
            <img src={`/images/payment/${company.imgSrc}.webp`} alt={company.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payment;
