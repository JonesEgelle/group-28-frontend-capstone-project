import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <>
      {/* Contact Form */}
      <section id='form-section' className={styles.formSection}>
        <div className={styles.formHeader}>
          <h2>Have Questions About Planetary Science?</h2>

          <p>
            Interested in learning more about space, astronomy, or how planetary
            data is collected and analyzed? Reach out and we&apos;ll get back to
            you.
          </p>
        </div>

        <form
          className={styles.contactForm}
          action='https://whitebricks.com/tsacademy.php'
          method='POST'
        >
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Contact Form</legend>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor='fname'>
                  Full Name<span>*</span>
                </label>
                <input
                  className={styles.input}
                  type='text'
                  id='fname'
                  name='fullname'
                  placeholder='Full Name'
                  minLength={10}
                  maxLength={20}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor='email'>
                  Email<span>*</span>
                </label>
                <input
                  className={styles.input}
                  type='email'
                  id='email'
                  name='email'
                  placeholder='example@example.com'
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor='pnumber'>
                  Phone Number<span>*</span>
                </label>
                <input
                  className={styles.input}
                  type='tel'
                  id='pnumber'
                  name='phone'
                  placeholder='08012345678'
                  pattern='[0-9]{11}'
                  maxLength={11}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor='message'>
                  Message<span>*</span>
                </label>
                <textarea
                  className={styles.textarea}
                  id='message'
                  name='message'
                  placeholder='Enter your message'
                  maxLength={100}
                  rows={4}
                  required
                />
                <p className={styles.helperText}>Maximum 100 characters.</p>
              </div>
            </div>
          </fieldset>
          <button className={styles.submitBtn} type='submit'>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
