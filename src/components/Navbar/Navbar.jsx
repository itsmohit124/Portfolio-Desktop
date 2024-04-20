import { useState, useEffect } from 'react';
import { Drawer, List, ListItem, IconButton } from '@mui/material';
import { Code as CodeIcon, WorkOutline as WorkOutlineIcon, DescriptionOutlined as DescriptionIcon, HomeOutlined as HomeIcon } from '@mui/icons-material'; // Import icons from Material-UI
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Tabs = [
  {
    id: 'home',
    href: "#home",
    icon: <HomeIcon/>,
  },
  {
    id: 'about',
    href: "#about",
    icon: <PersonOutlineIcon />, // Use Home icon
  },
  {
    id: 'skills',
    href: "#skills",
    icon: <CodeIcon />, // Use Code icon
  },
  {
    id: 'projects',
    href: "#projects",
    icon: <WorkOutlineIcon />, // Use WorkOutline icon
  },
  {
    id: 'resume',
    href: "#resume",
    icon: <DescriptionIcon />, // Use Description icon
  },
  // {
  //   id: 'footer',
  //   href: "#footer"
  // }
];


const icons = [
  {
    href: "https://github.com/itsmohit124",
    icon: <GitHubIcon />
  },
  {
    href: "https://www.linkedin.com/in/mohit-sharma-390238224/",
    icon: <LinkedInIcon />
  },
  {
    href: "https://www.instagram.com/sketched.soul_",
    icon: <InstagramIcon />
  }
];

export const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollActiveIndex, setScrollActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      const scrollRatio = scrollTop / (bodyHeight - windowHeight);

      const currentSectionIndex = Math.floor(scrollRatio * Tabs.length);
      const currentTabId = Tabs[currentSectionIndex].id;
      
      window.history.replaceState(null, null, `#${currentTabId}`);
      setScrollActiveIndex(currentSectionIndex);
      setActiveIndex(null);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    const hash = window.location.hash;
    const index = Tabs.findIndex(tab => tab.href === hash);
    setScrollActiveIndex(index !== -1 ? index : null);
    setActiveIndex(index !== -1 ? index : null);
  }, []);
  
  return (
    <Drawer className={styles.drawer} variant="permanent" classes={{ paper: styles.drawerPaper }}>
      {/* Logo outside the List */}
      <a href="/" className={styles.logoLink}>
        <img src={getImageUrl("nav/logo.png")} alt="Logo" className={styles.logoImg} />
      </a>

      <List>
        {Tabs.map((tab, index) => (
          <ListItem key={tab.id} className={styles.listItem}>
            <a
              href={tab.href}
              className={(activeIndex === index || scrollActiveIndex === index) ? styles.active : ""}
              // className={activeIndex === index? styles.active : ""}
              onClick={() => setActiveIndex(index)}
            >
              {tab.icon} {/* Render the icon */}
            </a>
          </ListItem>
        ))}
      </List>


      {/* Social media icons */}
      <div className={styles.socialIcons}>
        {icons.map((icn) => (
          <IconButton key={icn.href} href={icn.href} target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
            {icn.icon}
          </IconButton>
        ))}
      </div>
    </Drawer>
  );
};

export default Navbar;
