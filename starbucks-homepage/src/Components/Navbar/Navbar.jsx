import React from "react";
import styles from "./navbar.module.css";
import starbucks_official from "../../Images/starbucks_official.png";
import starbucks_map from "../../Images/starbucks_map.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar_main}>
        <div className={styles.navbar_main_left}>
          <div>
            <img src={starbucks_official} alt="Starbucks" />
          </div>
          <div>
            <a href="">MENU</a>
          </div>
          <div>
            <a href="">REWARDS</a>
          </div>
          <div>
            <a href="">GIFT CARDS</a>
          </div>
        </div>
        <div className={styles.navbar_main_mid}></div>
        <div className={styles.navbar_main_right}>
          <div className={styles.navbar_main_right_location}>
            <img src={starbucks_map} alt="Starbucks Map Pointer" />
            <p>Find a store</p>
          </div>
          <button>Sign in</button>
          <button>Join now</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
