import { Typography, Grid, Box } from '@mui/material';
import styles from './Footer.module.css';
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer className={styles.footer}>

        <Grid>
            <Box component="div" className={styles.section}>
              <Typography className={styles.sectionTypography}>Thanks For Visiting My Profile, If You Have Any Queries Feel Free To Contact.</Typography>
              <img src={getImageUrl("Footer/footer.png")} alt="Footer" width="300" height="250" />
            </Box>
        </Grid>
      <Box component="div" className={styles.bottomBar}>
        <Typography variant="body1" className={styles.copyRight}>©2024 All Rights are reserved</Typography>
      </Box>
    </footer>
  );
};
