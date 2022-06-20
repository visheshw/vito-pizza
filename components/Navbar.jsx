import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
    <div className={styles.item}>
    <Link href="/" passHref>
    <div className={styles.logos}>
      <Image src="/img/logo.png" alt="" width="75px" height="70px" />
      </div>
      </Link>
    
      <div className={styles.callButton}>
        <Image src="/img/telephone.png" alt="" width="40" height="40" />
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>9876543210</div>
      </div>
      </div>
      
    <div className={styles.item}>
      <ul className={styles.list}>
    
      </ul>
    </div>
    <Link href="/cart" passHref>
    <div className={styles.item}>
      <div className={styles.cart}>
        <Image src="/img/cart.png" alt="" width="40px" height="40px" />
        <div className={styles.counter}>{quantity}</div>
      </div>
    </div>
    </Link>
  </div>
  )
}

export default Navbar
