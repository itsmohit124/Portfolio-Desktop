import { useState } from 'react';
import { Dialog, DialogContent, Card, CardContent} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Certificate.module.css";
import { resume, getImageUrl } from "../../utils";

function Certificate() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className={styles.certifications} id="resume">
      <h2>Resume</h2>
      <Card onClick={handleOpenDialog} className={styles.resumeCard}>
        <CardContent>
          {/* Show preview of resume here */}
          <img src={getImageUrl("certificate/resume.png")} alt="Resume Preview" className={styles.image} />
        </CardContent>
      </Card>
      
      {/* Full Screen Dialog for Resume */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent className={styles.fullScreenPDFContainer}>
          <object data={resume} type="application/pdf" className={styles.fullScreenPDF}></object>
          <CloseIcon className={styles.closeButton} onClick={handleCloseDialog} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Certificate;
