/* eslint-disable react/prop-types */
import { Typography, Box, Button, List } from '@mui/material';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  // eslint-disable-next-line react/prop-types
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <Box className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <Typography className={styles.title}>{title}</Typography>
      <Typography variant="body1" className={styles.description}>{description}</Typography>
      <List className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <Typography key={id} variant="body2" className={styles.skill}>
              {skill}
            </Typography>
          );
        })}
      </List>
      <div className={styles.links}>
        <Button href={demo} className={styles.link} target="_blank" rel="noopener noreferrer" variant="contained" color="primary">
            Demo
        </Button>
        <Button href={source} className={styles.link} target="_blank" rel="noopener noreferrer" variant="contained" color="secondary">
          Source
        </Button>
      </div>
    </Box>
  );
};
