import React from "react";
import styles from "./Cards.module.css";

function Cards({ name, flag }) {
  return (
    <div className={styles.countryCard}>
      <img className={styles.image} src={flag} alt={`Flag of ${name}`} />
      <p>{name}</p>
    </div>
  );
}

export default Cards;
