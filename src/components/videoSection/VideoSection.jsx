import React from 'react';
import styles from './VideoSection.module.css';
const VideoSection = () => {
  return (
    <>
      {/* Video Section */}
      <section className={styles.videoSection}>
        {/* <video
          width={484}
          height={496}
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
        </video> */}
        <div className={styles.videoContainer}>
          {/* <img
            src='src/assets/videoPlaceholder.svg'
            alt='Company Logo'
            width={484}
            height={496}
            loading='lazy'
          /> */}
          <video
            width={484}
            height={496}
            autoPlay
            muted
            loop
            playsInline
            controls
            download='true'
          >
            <source
              src='https://videotourl.com/videos/1775122754836-288be386-cff3-4e87-abe9-4d5ca47a81ba.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.mainContent}>
          <h2>How Planetary Data Helps Us Understand Space</h2>

          <p>
            Planetary science goes beyond images. Comparing <span>mass</span>,{' '}
            <span>diameter</span>, <span>gravity</span>, and{' '}
            <span>density</span>, we gain insight into how planets form, behave,
            and interact within the solar system.
          </p>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
