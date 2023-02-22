import concipe from './assets/concipe.png'; 
import styles from './Projects.module.scss'

export function Projects() {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.title}>
                <h2>PROJETOS</h2>
            </div>

            <section className={styles.projectContainer}>
                <div className={styles.projectLeft}>
                    <img src={concipe} alt="CONCIPE" />
                    
                    <div>
                        <h3>Sitema de registro de entrada</h3>
                        
                        <span>Faculdade F<span className={styles.letterName}>A</span>SIPE</span>

                        <p>Sistema desenvolvido para o evento da faculdade onde o mesmo para cada aluno inscrito no evento gera um QrCode com as informações do aluno como nome e RA. Após isso o QrCode pode ser escaneado e assim registra a presença do aluno no congresso, esse registro no banco de dados e retornado depois em forma de relatório onde traz a relação de todos os alunos com presença registrada no evento.</p>
                        
                        <span>Tecnologias usadas <br /> <br />
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-square-js"></i>
                            <i class="fa-brands fa-node-js"></i>
                            HTML, CSS, JavaScript, Node.js, Mysql, PHP, jQuery
                        </span>
                    </div>
                </div>

                
              
                
            </section>
        </main>
    ); 

}