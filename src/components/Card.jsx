import styles from "./Card.module.css";
import Person from "./Person";

function Card() {
  return (
    <div className={styles.card}>
      <img src="./images/drawers.jpg" alt="" />
      <div className={styles.cardContent}>
      <h2>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h2>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I&apos;ve got some simple tips to help you
        make any room feel complete.
      </p>

      <Person />
      </div>
    </div>
  );
}

export default Card;
