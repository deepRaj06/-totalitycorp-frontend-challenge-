import React from "react";
import styles from "./one.module.css";
import million_stars from "../../../Images/million_stars.jpg";

const Section_One = () => {
  return (
    <div className={styles.s_one}>
      <div className={styles.s_one_left}>
        <img src={million_stars} alt="million start giveaway" />
      </div>
      <div className={styles.s_one_right}>
        <h1>Win a thousand Stars</h1>
        <p>
          We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in
          our Million Stars Giveaway and much more all week!*
        </p>
        <button>Play to win</button>
      </div>
    </div>
  );
};

export default Section_One;
