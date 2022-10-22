import React from "react";
import styles from "./two.module.css";
import starbucks_rewards from "../../../Images/starbucks_rewards.webp";

const Section_Two = () => {
  return (
    <div className={styles.s_two}>
      <div className={styles.s_two_left}>
        <span>
          <h1>A new way to earn sips and trips</h1>
          <p>Now you can link your Starbucks® Rewards + Delta</p>
          <p>SkyMiles® accounts to get:</p>
          <ul>
            <li>150 Stars + 500 miles when you link before 12/31</li>
            <li>Double Stars on Delta travel days</li>
            <li>
              1 mile per $1 spent at Starbucks (excludes taxes and gratuities)**
            </li>
          </ul>
          <button>Link accounts</button>
        </span>
      </div>
      <div className={styles.s_two_right}>
        <img src={starbucks_rewards} alt="million start giveaway" />
      </div>
    </div>
  );
};

export default Section_Two;
