import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PIZZA SO DELICIOUS, YOU CAN'T REFUSE</h1>
      <p className={styles.desc}>
        There's no better feeling in the world than a warm Pizza Box.
        <br></br>
        Check out our all new range of delicious Pizza.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
