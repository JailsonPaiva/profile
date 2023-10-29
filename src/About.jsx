import { FaHtml5, FaNodeJs, FaReact, FaGitAlt, FaNode } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io";
import { DiMysql } from "react-icons/di";

import styles from './About.module.scss';
import { useSpring, animated } from '@react-spring/web'

import avatar from './assets/avatar-345.svg'

export function About() {
    const fadeIn = useSpring(
        {
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: { duration: 2000, ease: [0.43, 0.13, 0.23, 0.96] },
        }
    );

    return (
        <animated.section className={styles.aboutContainer} id='about' style={fadeIn}>
            <div>
                <h3>Oi eu sou o <abbr title="Goku ㊗">Jailson✌</abbr>;</h3>
                <p>Formado em Análise e Desenvolvimento de Sistemas apoixonado por tecnologia. Durante dois anos venho me desenvolvendo como profissional e aluno, buscando ser um grande Desenvolvedor onde eu possa contribuir com o meu trabalho.</p>

                <div className={styles.skillContainer}>
                    <h4>Hard Skills</h4>

                    <ul>
                        <li>
                            <abbr title="React.JS"><FaReact /></abbr>
                        </li>
                        <li>
                            <abbr title="Node.JS"><FaNodeJs /></abbr>
                        </li>
                        <li>
                            <abbr title="MySQL"> <DiMysql /> </abbr>
                        </li>
                        <li>
                            <abbr title="Git"><FaGitAlt /></abbr>
                        </li>
                    </ul>

                </div>
            </div>



            <img src={avatar} alt="Foto de perfil" />
        </animated.section>
    );
} 