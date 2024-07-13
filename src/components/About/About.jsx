import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Technical Skills</h3>
              <p>
              I am proficient in programming languages such as C++ and JavaScript. I have experience in web development using frameworks like React.js and Node.js, along with MongoDB and Express.js. I actively participate in coding challenges on platforms like LeetCode and Codeforces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Other Skills:</h3>
              <p>
              I contribute to the Google Developer Student Club and DRISTI NGO, and I have completed an internship at Prodigy InfoTech, which enhanced my communication and teamwork skills.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>

              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
