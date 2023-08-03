import { FaHtml5, FaCss3Alt, FaNodeJs, FaGithubSquare } from 'react-icons/fa' 
import { SiJavascript, SiMysql } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io";
import { DiMysql } from "react-icons/di";


import styles from './About.module.scss';

export function About() {
    return (
        <section className={styles.aboutContainer} id='about'>
            <div>
                <h3>Oi eu sou o <abbr title="Goku ㊗">Jailson✌</abbr>;</h3>
                <p>Formado em Análise e Desenvolvimento de Sistemas apoixonado por tecnologia. Durante dois anos venho me desenvolvendo como profissional e aluno, buscando ser um grande Desenvolvedor onde eu possa contribuir com o meu trabalho.</p>

                <div className={styles.skillContainer}>
                    <h4>Soft Skills</h4>

                    <ul>
                        <li> 
                            <abbr title="HTML5"><FaHtml5 /></abbr>
                        </li>
                        <li> 
                            <abbr title="CSS3"><FaCss3Alt /></abbr>
                        </li>
                        <li>
                            <abbr title="JavaScript"> <IoLogoJavascript /></abbr>
                        </li>
                        <li>
                            <abbr title="Node.JS"><FaNodeJs /></abbr>
                        </li>
                        <li>
                            <abbr title="MySQL"> <DiMysql /> </abbr>
                        </li>
                        <li>
                            <abbr title="GIT"><FaGithubSquare /></abbr>
                        </li>
                    </ul>
                
                </div>
            </div>

            

            <img src="https://github.com/JailsonPaiva.png" alt="Foto de perfil" />
        </section>
    );
} 