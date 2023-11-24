"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Cadastro.module.css';

const Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleCadastro = () => {
    console.log('Cadastro realizado!');
  };

  return (
    <section className={styles.cadastroSection}>
      <div className={styles.cadastroLeft}>
        <div className={styles.cadastroImage}>
          <Image src="/img/cadastro.svg" alt="" width={678} height={789} />
        </div>
      </div>
      <div className={styles.cadastroRight}>
        <div className={styles.cadastroForm}>
          <h1>Cadastro</h1>
          <input type="text" placeholder="Nome" className={styles.input} />
          <input type="text" placeholder="CPF" className={styles.input} />
          <input type="text" placeholder="Data de Nascimento" className={styles.input} />
          <input type="text" placeholder="Telefone Celular" className={styles.input} />
          <input type="text" placeholder="Endereço" className={styles.input} />
          <input type="text" placeholder="Sexo" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="email" placeholder="Confirmar Email" className={styles.input} />
          <div className={styles.passwordInput}>
            <input type={showPassword ? 'text' : 'password'} placeholder="Senha" className={styles.input} />
            <button type="button" onClick={handleTogglePassword} className={styles.togglePasswordButton}>
              <Image
                src={`/img/icons/olho${showPassword ? '-aberto' : '-fechado'}.svg`}
                alt={showPassword ? 'Olho aberto' : 'Olho fechado'}
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className={styles.passwordInput}>
            <input type={showPassword ? 'text' : 'password'} placeholder="Confirmar Senha" className={styles.input} />
            <button type="button" onClick={handleTogglePassword} className={styles.togglePasswordButton}>
              <Image
                src={`/img/icons/olho${showPassword ? '-aberto' : '-fechado'}.svg`}
                alt={showPassword ? 'Olho aberto' : 'Olho fechado'}
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" className={styles.checkbox} />
            <label className={styles.checkboxLabel}>Eu autorizo a utilização dos meus dados e respostas para fins de treinamento de inteligência artificial.</label>
          </div>
          <button className={styles.cadastrarButton} onClick={handleCadastro}>
            Cadastrar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cadastro;
