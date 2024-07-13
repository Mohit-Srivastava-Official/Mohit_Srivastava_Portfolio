import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mohit Srivastava</h1>
        <p className={styles.description}>


        I am a tech enthusiast and B.Tech student in Electronics and Communication Engineering at BIT Mesra. I have skills in C++, JavaScript, React.js, and Node.js, with experience from an internship at Prodigy InfoTech and participation in coding challenges and clubs.
        </p>
        <a href="mohitsrivastavaofficial@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
