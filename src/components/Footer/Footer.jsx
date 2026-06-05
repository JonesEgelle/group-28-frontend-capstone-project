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
          <div>
            <p>
              &copy; 2026 Design by <a href='https://amakandukwu.com/'>Amaka</a>
              &nbsp;& &nbsp;
              <a href='https://www.linkedin.com/in/ifeomaokocha/'>Ifeoma A</a>.
              <br />
              Built by Group 28. All rights reserved
            </p>
          </div>

          <a href='https://tsacademyonline.com/'>TSAcademy</a>
        </section>
      </footer>
    </>
  );
};

export default Footer;
