"use client"

import styles from '../../styles/Contato.module.css';

export default function Contato() {
    return (
        <section className={styles.contatoSection}>
            <div className={styles.formularioContainer}>
                <form className={styles.formulario}>
                    <h1>Contato</h1>
                    <input type="text" id="nome" name="nome" placeholder='Nome' required/>
                    <input type="email" id="email" name="email" placeholder='Email' required/>
                    <input  type="text" id="mensagem" name="mensagem" placeholder='Mensagem' required/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}