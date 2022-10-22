import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div>
          <h5>About Us</h5>
          <p>Our Company</p>
          <p>Our Coffee</p>
          <p>Stories and News</p>
          <p>Starbucks and News</p>
          <p>Starbucks Archive</p>
          <p>Investor Relations</p>
          <p>Customer Service</p>
        </div>
        <div>
          <h5>Careers</h5>
          <p>Culture and Values</p>
          <p>Inclusion, Diversity, and Equity</p>
          <p>College Achievement Plan</p>
          <p>Alumni Community</p>
          <p>U.S. Careers</p>
          <p>International Careers</p>
        </div>
        <div>
          <h5>Social Impact</h5>
          <p>People</p>
          <p>Planet</p>
          <p>Environmental and Social Impact Reporting</p>
        </div>
        <div>
          <h5>For Business Partners</h5>
          <p>Landlord Support Center</p>
          <p>Suppliers</p>
          <p>Corporate Gift Card sales</p>
          <p>Office and Foodservice Coffee</p>
        </div>
        <div>
          <h5>Order and Pickup</h5>
          <p>Order on the App</p>
          <p>Order on the web</p>
          <p>Delivery</p>
          <p>Order and Pickup Options</p>
          <p>Explore and Find Coffee for Home</p>
          <p></p>
        </div>
      </div>
      <hr />
      <div className={styles.footer_social}>
        <div className={styles.footer_social_icons}></div>
        <div>
          Privacy Policy | Terms of Use | CA Supply Chain Act | Cookie
          Preferences
        </div>
        <div>
          <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
