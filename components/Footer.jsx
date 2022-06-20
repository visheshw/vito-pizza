import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          VITO PIZZA
          </h2>
          <h1 className={styles.titlee}>PIZZA SO DELICIOUS, <br/>YOU CAN'T REFUSE.</h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OUR RESTAURANTS:</h1>
          <p className={styles.text}>
            24, AB Road
            <br /> Mumbai, 400000
            <br /> +91 987654321
          </p>
          <p className={styles.text}>
            24, AB Road
            <br /> Mumbai, 400000
            <br /> +91 987654321
          </p>
          <p className={styles.text}>
            24, AB Road
            <br /> Mumbai, 400000
            <br /> +91 987654321
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            Open 24 hours!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
