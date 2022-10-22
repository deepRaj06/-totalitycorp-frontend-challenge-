import React from "react";
import styles from "./body.module.css";
import Section_Two from "./Sections_Two.jsx/Section_Two";
import Section_Five from "./Section_five.jsx/Section_Five";
import Section_Four from "./Section_Four.jsx/Section_Four";
import Section_One from "./Section_One.jsx/Section_One";
import Section_Three from "./Section_Three.jsx/Section_Three";

const Body = () => {
  return (
    <div className={styles.body_main}>
      <Section_One />
      <Section_Two />
      <Section_Three />
      <Section_Four />
      <Section_Five />
    </div>
  );
};

export default Body;
