import React, { useState } from 'react';

import Jimg from '../src/assets/J.svg'

import styles from './Home.module.scss'

export default function App() {
  const [selectedButton, setSelectedButton] = useState('home');

  const handleButtonClick = (button) => {
      setSelectedButton(button);
      const section = document.getElementById(button);
      section.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <header className={styles.headerContainer} >
        <section >
          <div>
            <span>J</span>veloper
          </div>
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
        </section>
      </header>


      <section className={styles.sectionContainer} id='home'>
        <div>
          <p>OI, <br /> 
          EU SOU JAILSON, <br />
          DESENVOLVEDOR WEB.</p>
          <span>Front-End | Back-end | Freelance</span>

          {/* <button>Entre em contato</button> */}

          <button className={styles.glow_o_hover}>Entre em Contato</button>
        </div>

        <img src={Jimg} alt="Letra Jota" />
      </section>
    </>
    )
}

