import styles from './Projects.module.scss'


import concipe from './assets/concipe.png'
import blog from './assets/blog.png'
import myLinktree from './assets/myLinktree.png'
import siteClone from './assets/siteClone.png'
import { useState } from 'react'

export function Projects() {
 

    return (
        <main className={styles.mainContainer} id='projects'>

            <section className={styles.projectContainer}>
                <div className={styles.title}>
                    <h2>PRO<span className={styles.letterName}>J</span>ETOS</h2>
                </div>
                
                <div className={styles.projectLeft}>
                    <img src={concipe} alt="CONCIPE" />
                    
                    <div>
                        <h3>Sitema de registro de entrada</h3>
                        
                        <span>Faculdade F<span className={styles.letterName}>A</span>SIPE</span>

                        <p>Sistema desenvolvido para o evento da faculdade onde o mesmo para cada aluno inscrito no evento gera um QrCode com as informações do aluno como nome e RA. Após isso o QrCode pode ser escaneado e assim registra a presença do aluno no congresso, esse registro no banco de dados e retornado depois em forma de relatório onde traz a relação de todos os alunos com presença registrada no evento.</p>
                        
                        <span>Tecnologias usadas </span> 
                        <span>HTML, CSS, JavaScript, Node.js, Mysql, PHP, jQuery</span>
                    </div>
                </div>

                <div className={styles.projectRight}>
                    <div>
                        <h3>Meu B<span className={styles.letterName}>l</span>og</h3>
                        
                        <span>Projeto de estudo</span>

                        <p>Projeto criado com durante meus estudos sobre Node.JS fazendo desse um projeto onde foi abordado diversos temas importantes como o uso de APIs REST, tratamento dos dados, segurança dos dados e responsividade. A playlist desse projeto pode ser encontrada aqui LINK.</p>
                        
                        <span>Tecnologias usadas </span>
                        <span>HTML, CSS, JavaScript, Node.js, MongoDB, Bootstrap.</span>
                    </div>

                    <img src={blog} alt="Meu Blog" />
                </div>

                <div className={styles.projectLeft}>
                    <img src={myLinktree} alt="Meu Linktree" />
                    
                    <div>
                        <h3>Meu <span className={styles.letterName}>L</span>inktree</h3>
                        
                        <span>Projeto Pessoal</span>

                        <p>Nesse projeto fiz uma simples replica do linktree com algumas alterações para ficar mais a minha cara rsrs.</p>
                        
                        <span>Tecnologias usadas </span> 
                        <span>HTML, CSS, JavaScript</span>
                    </div>
                </div>

                <div className={styles.projectRight}>
                    <div>
                        <h3><span className={styles.letterName}>S</span>ite Clone</h3>
                        
                        <span>Projeto de estudo</span>

                        <p>Neste projeto me desafiei a replicar um site somente com HTML, CSS e JavaScript, então peguei como exemplo esse template EXEMPLO,foi um desafio onde conseguir aplicar tudo que eu já tinha estudado e me ajudou a melhorar a organização dos elementos em tela.</p>
                        
                        <span>Tecnologias usadas </span>
                        <span>HTML, CSS, JavaScript.</span>
                    </div>

                    <img src={siteClone} alt="Site Clone" />
                </div>
              
                
                <div className={styles.title}>
                    <h2>C<span className={styles.letterName}>o</span>ntato</h2>
                </div>
            </section>
        </main>
    ); 

}