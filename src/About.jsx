import styles from './About.module.scss';

export function About() {
    return (
        <section className={styles.aboutContainer} id={aboutSection}>
            <div>
                <h3>Oi eu sou o <abbr title="Goku ㊗">Jailson✌</abbr>.</h3>
                <p>Formado em Análise e Desenvolvimento de Sistemas e cursando pós-graduação em Engenharia de Software na PUC Minas venho me desenvolvendo como profissional e aluno buscando ser um grande Desenvolvedor que possa contribuir com o meu trabalho.</p>
            </div>

            <img src="https://github.com/JailsonPaiva.png" alt="Foto de perfil" />
        </section>
    );
} 