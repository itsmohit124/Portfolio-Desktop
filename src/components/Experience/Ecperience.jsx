
import { Typography, Box, Link as MuiLink, ListItem, List } from "@mui/material";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="skills">
      <Typography className={styles.title}>Skills</Typography>
      <Box className={styles.content}>
        <Box className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <Box key={id} className={styles.skill}>
                <Box className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </Box>
                <Typography variant="body1">{skill.title}</Typography>
              </Box>
            );
          })}
        </Box>
        <List className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <ListItem key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <Box className={styles.historyItemDetails}>
                  <Typography className={styles.historyItemTitle}>{`${historyItem.role}`}</Typography>
                  <MuiLink href={historyItem.link} className={styles.linkSrc} target="_blank" rel="noopener noreferrer">
                    Visit My Profile
                  </MuiLink>
                  <List>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </List>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </section>
  );
};
