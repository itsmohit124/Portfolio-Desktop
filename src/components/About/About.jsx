/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@mui/material';
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <Typography variant="h3" className={styles.title}>About</Typography>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage1.png")}
          alt="I'm Standing on the ground"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Front End icon" width="138" height="100"/>
            <div className={styles.aboutItemText}>
              <Typography variant="h3">FullStack Developer</Typography>
              <Typography>
              As a FullStack developer, I excel in crafting responsive, optimized websites utilizing both React and Ruby on Rails frameworks.
              </Typography>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.problemsolving} src={getImageUrl("about/problemsolving.png")} alt="Programming" width="350" height="100"/>
            <div className={styles.aboutItemText}>
              <Typography variant="h3">Problem Solver</Typography>
              <Typography>
                An ardent problem solver, proficient in Python, C++, Java, Ruby, and JavaScript, with a strong foundation in data structures. Skillfully harnesses these competencies to innovatively address coding challenges.
              </Typography>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/programming.png")} alt="Front End icon" width="200" height="100"/>
            <div className={styles.aboutItemText}>
              <Typography variant="h3">Programming Proficiency</Typography>
              <Typography>
              Proficient in Python, C++, Java, HTML, CSS, JavaScript, Ruby, and also adept at SQL and MongoDB
              </Typography>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/technicalExpertise.png")} alt="Front End icon" width="380" height="100"/>
            <div className={styles.aboutItemText}>
              <Typography variant="h3">Technical Expertise</Typography>
              <Typography>
              Skilled in Data Structures and Algorithms with a knack for problem-solving. Well-versed in Object-Oriented Programming, Database Management, and adept with Windows and Linux OS.
              </Typography>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
