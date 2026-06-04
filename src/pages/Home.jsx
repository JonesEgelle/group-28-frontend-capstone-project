import React from 'react';
import Hero from '../components/Hero/Hero';
import PlanetSection from '../components/PlanetSection/PlanetSection';
import VideoSection from '../components/videoSection/VideoSection';
import FactsSection from '../components/FactsSection/FactsSection';

const Home = () => {
  return (
    <>
      <main className='main-content'>
        {/* Hero Section */}
        <Hero />

        {/* Video Section */}
        <VideoSection />

        {/* Planet Section */}
        <PlanetSection />

        {/* Table Section */}
        <FactsSection />

        {/* Contact Form */}
        <section id='form-section' className='formsection'>
          <h2>Have Questions About Planetary Science?</h2>

          <p>
            Interested in learning more about space, astronomy, or how planetary
            data is collected and analyzed? Reach out and we&apos;ll get back to
            you.
          </p>

          <form action='https://whitebricks.com/tsacademy.php' method='POST'>
            <fieldset>
              <legend>Contact Form</legend>

              <label htmlFor='fname'>Full Name*</label>
              <br />
              <input
                type='text'
                id='fname'
                name='fullname'
                placeholder='Full Name'
                minLength={10}
                maxLength={20}
                required
              />

              <br />
              <br />

              <label htmlFor='email'>Email*</label>
              <br />
              <input
                type='email'
                id='email'
                name='email'
                placeholder='example@example.com'
                required
              />

              <br />
              <br />

              <label htmlFor='city'>City*</label>
              <br />
              <select id='city' name='city' required>
                <option value='' disabled>
                  Choose a City
                </option>
                <option value='Lagos Island'>Lagos Island</option>
                <option value='Ikeja'>Ikeja</option>
                <option value='Yaba'>Yaba</option>
                <option value='Surulere'>Surulere</option>
                <option value='Lekki'>Lekki</option>
                <option value='Ajah'>Ajah</option>
                <option value='Ikorodu'>Ikorodu</option>
                <option value='Badagry'>Badagry</option>
                <option value='Maryland'>Maryland</option>
                <option value='Victoria Island'>Victoria Island</option>
              </select>

              <br />
              <br />

              <label htmlFor='pnumber'>Phone Number*</label>
              <br />
              <input
                type='tel'
                id='pnumber'
                name='phone'
                placeholder='08012345678'
                pattern='[0-9]{11}'
                maxLength={11}
                required
              />

              <br />
              <br />

              <label htmlFor='message'>Message*</label>
              <br />
              <textarea
                id='message'
                name='message'
                placeholder='Enter your message'
                maxLength={100}
                rows={5}
                cols={40}
                required
              />

              <p>Maximum 100 characters.</p>

              <p>How should we contact you?</p>

              <label>
                <input type='radio' name='contactmode' value='Phone' required />{' '}
                Phone
              </label>

              <label>
                <input type='radio' name='contactmode' value='Email' /> Email
              </label>

              <label>
                <input type='radio' name='contactmode' value='Both' /> Both
              </label>

              <br />
              <br />

              <p>How did you hear about us?</p>

              <label>
                <input type='checkbox' name='source[]' value='Friend' /> Friend
              </label>

              <label>
                <input type='checkbox' name='source[]' value='TS Academy' /> TS
                Academy
              </label>

              <label>
                <input type='checkbox' name='source[]' value='Others' /> Others
              </label>

              <br />
              <br />

              <button type='submit'>Submit</button>
            </fieldset>
          </form>
        </section>

        <hr aria-hidden='true' />
      </main>

      <footer className='footer'>
        <section className='footersection'>
          <h3>About</h3>

          <ul>
            <li>
              <a href='#'>Planetary Facts</a>
            </li>
            <li>
              <a href='#'>Gallery</a>
            </li>
            <li>
              <a href='#'>World Records</a>
            </li>
            <li>
              <a href='#'>Guides</a>
            </li>
          </ul>
        </section>

        <hr />

        <section className='tandc'>
          <p>&copy; 2026 Jones Egelle. Design by Amaka. All rights reserved.</p>
          <a href='#'>Privacy Policy</a>
          &nbsp;&nbsp;
          <a href='#'>Terms &amp; Conditions</a>
        </section>
      </footer>
    </>
  );
};

export default Home;
