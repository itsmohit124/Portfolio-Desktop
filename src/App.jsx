
import styles from "./App.module.css";
import { About } from "./components/About/About";
import Certificate from "./components/Cerificate/Certificate";

import { Experience } from "./components/Experience/Ecperience";

import { Hero } from './components/Hero/Hero';

import { Navbar } from './components/Navbar/Navbar';
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/footer";

function App() {
  

  return (
    <div className= {styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      < Certificate /> 
      <Footer />     
    </div>
  )
}

export default App
