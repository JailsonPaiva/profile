import styles from './Contact.module.scss'

export function Contact() {
    return (
        <section className={styles.contactContainer}>
            <form action="#">
            
                <label for="mensage">Tipo de mensagem</label>

                <select id="mensage">
                    <option value="1" selected>Selecione aqui</option>
                    <option value="2">Proposta de emprego</option>
                    <option value="3">Freelace</option>
                    <option value="4">Indicação</option>
                    <option value="5">Feedback</option>
                    <option value="6">Outro</option>
                </select>

                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder='Digite aqui o seu e-mail'/>
                
                <label for="mensage">Mensagem</label>
                <textarea name="mensage" id="mensage" className={styles.mensage} placeholder='Olá Jailson ...'>
                

                    
                </textarea>
            </form>

        </section>
    );
}