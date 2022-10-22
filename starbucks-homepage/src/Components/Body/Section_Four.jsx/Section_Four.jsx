import React from "react";
import styles from "./four.module.css";
import baked_apple from "../../../Images/baked_apple.jpg";

const Section_Four = () => {
  return (
    <div className={styles.s_four}>
      <div className={styles.s_four_left}>
        <h1>Layers of baked apple yum</h1>
        <p>
          Try the Apple Crisp Oatmilk Macchiato, now nondairy and with
          Starbucks® Blonde Espresso.
        </p>
        <button>Learn more</button>
      </div>
      <div className={styles.s_four_right}>
        <img src={baked_apple} alt="million start giveaway" />
      </div>
    </div>
  );
};

export default Section_Four;
