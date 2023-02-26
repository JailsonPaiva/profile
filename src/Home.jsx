import Jimg from '../src/assets/J.svg'

import styles from './Home.module.scss'

export default function App() {
  return (
    <>
      <header className={styles.headerContainer}>
        <section>
          <div>
            <span>J</span>veloper
          </div>
          <ul className={styles.ulContainer}>
            <li>
              <a href="#" className={styles.Active}>HOME</a>
            </li>
            <li>
              <a href={aboutSection}>SOBRE</a>
            </li>
            <li>
              <a href="#">PORJETOS</a>
            </li>
            <li>
              <a href="#">CONTAT0</a>
            </li>
          </ul>
        </section>
      </header>


      <section className={styles.sectionContainer}>
        <div>
          <p>OI, <br /> 
          EU SOU <span>J</span>ailson, <br />
          DESENVOLVEDOR WEB.</p>
          <span>Front-End | Back-end | Freelance</span>

          <button>Entre em contato</button>
        </div>

        <img src={Jimg} alt="Letra Jota" />
      </section>
    </>
    )
}

