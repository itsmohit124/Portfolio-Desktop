import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import styles from "./Hero.module.css"; // Import CSS module styles
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText =
    "Hello, My name is\nMohit Sharma\nFull-Stack Developer\nI design and develop services for customers of all sizes,\n specializing in creating stylish,\n modern websites, web services and online stores."; // Your full text for typing effect
  const delay = 30; // Decrease delay for faster typing effect
  const pauseDelay = 3000; // Pause duration after typing effect completes

  useEffect(() => {
    let interval;
    if (text === fullText) {
      // If text is fully typed, wait for pauseDelay before resetting text
      interval = setTimeout(() => {
        setText('');
      }, pauseDelay);
    } else {
      // Typing effect
      interval = setInterval(() => {
        if (text === fullText) {
          clearInterval(interval);
        } else {
          setText(fullText.substring(0, text.length + 1));
        }
      }, delay);
    }
    return () => clearInterval(interval);
  }, [text, fullText]);

  const handleEmailClick = () => {
    window.location.href = 'mailto:itsmohit124@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+917488835182';
  };

  return (
    <div style={{ overflowX: 'hidden', overflowY: 'hidden' }} id="home">
      <div className={styles['contact-info']}>
        <Typography variant="body1" component="p" onClick={handlePhoneClick} className={styles['phone-info']}>
          +91 7488835182
        </Typography>
        <Typography variant="body1" component="p" onClick={handleEmailClick} className={styles['email-info']}>
          itsmohit124@gmail.com
        </Typography>
      </div>
      <div className={styles['home-center']}>
        {/* Set background color to match the image */}
        <Box className={styles['home-content']}>
          <Typography className={styles.upper}>
            {text.split('\n')[0]} {/* "Hello, My name is" */}
          </Typography>
          <Typography className={styles.name}>
            {text.split('\n')[1]} {/* Nairobi Gadot */}
          </Typography>
          <Typography className={styles.role}>
            {text.split('\n')[2]} {/* Full-Stack Developer */}
          </Typography>
          <Typography variant="body1" component="p" className={styles.description}>
            {text.split('\n')[3]}
            <br />
            {text.split('\n')[4]}
            <br />
            {text.split('\n')[5]}
          </Typography>
        </Box>
        {/* Image container */}
        <div className={styles['image-container']}>
          <img src={getImageUrl("hero/portrait.png")} alt="Portrait" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
