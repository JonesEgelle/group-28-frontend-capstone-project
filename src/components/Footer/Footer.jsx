import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <>
      <footer className={styles.footerSection}>
        <section className={styles.footerMain}>
          <h3>About</h3>

          <ul>
            <li>
              <a href='#'>Jones</a>
            </li>
            <li>
              <a href='#'>Jade</a>
            </li>
            <li>
              <a href='#'>kenneth</a>
            </li>
            <li>
              <a href='#'>Ayoad</a>
            </li>
            <li>
              <a href='#'>Sweetness</a>
            </li>
            <li>
              <a href='#'>Samuel </a>
            </li>
            <li>
              <a href='#'> Progress</a>
            </li>
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
              Built by{' '}
              <a href='https://github.com/JonesEgelle/group-28-frontend-capstone-project.git'>
                Group 28
              </a>
              . All rights reserved
            </p>
          </div>

          <a href='https://tsacademyonline.com/'>TSAcademy</a>
        </section>
      </footer>
    </>
  );
};

export default Footer;
