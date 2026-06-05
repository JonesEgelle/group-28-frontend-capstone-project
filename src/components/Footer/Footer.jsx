import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <>
      <footer className={styles.footerSection}>
        <section className={styles.footerMain}>
          <h3>About</h3>
          <p>first name of group members</p>
          <ul>
            {/* <li>
              <a href='#'>Planetary Facts</a>
            </li> */}
            {/* <li>
              <a href='#'>Gallery</a>
            </li>
            <li>
              <a href='#'>World Records</a>
            </li>
            <li>
              <a href='#'>Guides</a>
            </li> */}
          </ul>
        </section>

        <hr />

        <section className={styles.tandc}>
          <p>
            &copy; 2026 Design by Amaka & Ifeoma. Built by ... All rights
            reserved.
          </p>
          &nbsp;&nbsp;
          <a href='#'>TSAcademy</a>
        </section>
      </footer>
    </>
  );
};

export default Footer;
