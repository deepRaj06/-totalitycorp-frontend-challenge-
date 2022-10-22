import React from "react";
import styles from "./five.module.css";
const Section_Five = () => {
  return (
    <div className={styles.s_five}>
      <div className={styles.s_five_container}>
        <p>
          *NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To
          enter and for Official
        </p>
        <p>
          Rules, visit <span>starbucksstardays.com.</span>
        </p>
        <p>Entrants can receive a maximum of 2 entries per day.</p>
        <p>
          **Excludes taxes and gratuities. At participating stores. Some
          restrictions apply. 150 Stars deposited after first qualifying
          Starbucks purchase. Flights purchased close to departure may not earn
          double Stars. Stars may not be earned on purchases of alcohol,
          Starbucks Cards and Starbucks Card reloads. For details, visit
          <span>deltastarbucks.com/terms</span>
        </p>
      </div>
    </div>
  );
};

export default Section_Five;
