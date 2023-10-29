import React, { useState } from 'react';

import Jimg from '../src/assets/J.svg'

import styles from './Home.module.scss'
import { useSpring, animated } from '@react-spring/web'


export default function App() {
  const [selectedButton, setSelectedButton] = useState('home');
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    const section = document.getElementById(button);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  const fadeIn = useSpring(
    {
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1500, ease: [0.43, 0.13, 0.23, 0.96] },
    }
  );

  return (
    <>
      <animated.header className={styles.headerContainer} style={fadeIn}>
        <section >
          <div>
            <span>J</span>veloper
          </div>

          <nav>
            <button
              className={styles.navbarToggle}
              onClick={() => setNavbarOpen((prev) => !prev)}
            >
              {navbarOpen ? 'close' : 'open'}
            </button>


            <ul className={styles.ulContainer}>
              <li>
                <button
                  onClick={() => handleButtonClick('home')}
                  className={`${selectedButton === 'home' ? styles.Active : ''}`}>HOME</button>
              </li>
              <li>
                <button
                  onClick={() => handleButtonClick('about')}
                  className={`${selectedButton === 'about' ? styles.Active : ''}`}>SOBRE</button>
              </li>
              <li>
                <button
                  onClick={() => handleButtonClick('projects')}
                  className={`${selectedButton === 'projects' ? styles.Active : ''}`}>PROJETOS</button>
              </li>
              <li>
                <button
                  onClick={() => handleButtonClick('contact')}
                  className={`${selectedButton === 'contact' ? styles.Active : ''}`}>CONTATO</button>
              </li>
            </ul>
          </nav>
        </section>
      </animated.header>


      <animated.section className={styles.sectionContainer} id='home' style={fadeIn}>
        <div>
          <p>OI, <br />
            EU SOU JAILSON, <br />
            DESENVOLVEDOR WEB.</p>
          <span>Front-End | Back-end | Freelance</span>

          {/* <button>Entre em contato</button> */}

          <button className={styles.glow_o_hover}>Entre em Contato</button>
        </div>

        <img src={Jimg} alt="Letra Jota" />
      </animated.section>
    </>
  )
}

