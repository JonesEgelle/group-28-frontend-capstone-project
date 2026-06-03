import React from 'react';
import Hero from '../components/Hero/Hero';

const Home = () => {
  return (
    <>
      <main className='main-content'>
        <Hero />
        <hr />

        {/* Video Section */}
        <section className='videosection'>
          <h2>How Planetary Data Helps Us Understand Space</h2>

          <p>
            Planetary science goes beyond images. Comparing{' '}
            <strong>mass</strong>, <strong>diameter</strong>,{' '}
            <strong>gravity</strong>, and <strong>density</strong>, we gain
            insight into how planets form, behave, and interact within the solar
            system.
          </p>

          <video
            width={600}
            height={370}
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source
              src='https://videotourl.com/videos/1775122754836-288be386-cff3-4e87-abe9-4d5ca47a81ba.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </section>

        <hr />

        {/* Image Section */}
        <section className='imagesection'>
          <h2>Visualizing the Differences Between Planets</h2>

          <p>
            Each planet in our solar system has unique physical characteristics.
            Visual comparisons help highlight how vastly different terrestrial
            planets are from gas giants and ice giants.
          </p>

          <figure>
            <img
              src='https://i.pinimg.com/1200x/f6/ac/54/f6ac54f64af086b9ad80aca667a221ce.jpg'
              alt='Comparison of planets showing size differences'
              width={600}
              height={400}
              loading='lazy'
            />
            <figcaption>
              Visual Comparison of Planets in Our Solar System
            </figcaption>
          </figure>
        </section>

        <hr />

        {/* Table Section */}
        <section id='table-section' className='tablesection'>
          <h2>Planetary Facts at a Glance</h2>

          <p>
            Below is a comparative table of major planets in our solar system.
            The data highlights key physical properties used by astronomers and
            researchers worldwide.
          </p>

          <table>
            <caption>
              Data about the planets of our solar system (Planetary facts taken
              from NASA)
            </caption>

            <thead>
              <tr>
                <th scope='col'>Category</th>
                <th scope='col'>Type</th>
                <th scope='col'>Name</th>
                <th scope='col'>Mass (10²⁴ kg)</th>
                <th scope='col'>Diameter (km)</th>
                <th scope='col'>Density (kg/m³)</th>
                <th scope='col'>Gravity (m/s²)</th>
              </tr>
            </thead>

            <tbody>
              {/* Terrestrial Planets */}
              <tr>
                <th scope='rowgroup' colSpan={2} rowSpan={4}>
                  Terrestrial Planets
                </th>
                <th scope='row'>Mercury</th>
                <td>0.330</td>
                <td>4,879</td>
                <td>5429</td>
                <td>3.7</td>
              </tr>

              <tr>
                <th scope='row'>Venus</th>
                <td>4.87</td>
                <td>12,104</td>
                <td>5243</td>
                <td>8.9</td>
              </tr>

              <tr>
                <th scope='row'>Earth</th>
                <td>5.97</td>
                <td>12,756</td>
                <td>5514</td>
                <td>9.8</td>
              </tr>

              <tr>
                <th scope='row'>Mars</th>
                <td>0.642</td>
                <td>6,792</td>
                <td>3934</td>
                <td>3.7</td>
              </tr>

              {/* Jovian Planets */}
              <tr>
                <th scope='rowgroup' rowSpan={4}>
                  Jovian Planets
                </th>
                <th scope='rowgroup' rowSpan={2}>
                  Gas Giants
                </th>
                <th scope='row'>Jupiter</th>
                <td>1898</td>
                <td>142,984</td>
                <td>1326</td>
                <td>23.1</td>
              </tr>

              <tr>
                <th scope='row'>Saturn</th>
                <td>568</td>
                <td>120,536</td>
                <td>687</td>
                <td>9.0</td>
              </tr>

              <tr>
                <th scope='rowgroup' rowSpan={2}>
                  Ice Giants
                </th>
                <th scope='row'>Uranus</th>
                <td>86.8</td>
                <td>51,118</td>
                <td>1271</td>
                <td>8.7</td>
              </tr>

              <tr>
                <th scope='row'>Neptune</th>
                <td>102</td>
                <td>49,528</td>
                <td>1638</td>
                <td>11.0</td>
              </tr>

              {/* Dwarf Planet */}
              <tr>
                <th scope='rowgroup' colSpan={2}>
                  Dwarf Planets
                </th>
                <th scope='row'>Pluto</th>
                <td>0.0146</td>
                <td>2,377</td>
                <td>1850</td>
                <td>0.7</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr />

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
