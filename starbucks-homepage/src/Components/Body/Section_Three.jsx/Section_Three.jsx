import React from "react";
import styles from "./three.module.css";
import perfect_pumkin from "../../../Images/perfect_pumkin.jpg";

const Section_Three = () => {
  return (
    <div className={styles.s_three}>
      <div className={styles.s_three_left}>
        <img src={perfect_pumkin} alt="million start giveaway" />
      </div>
      <div className={styles.s_three_right}>
        <h1>Perfectly pumpkin</h1>
        <p>
          Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold
          Brew.
        </p>
        <button>Order now</button>
      </div>
    </div>
  );
};

export default Section_Three;
