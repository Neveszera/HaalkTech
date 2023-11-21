"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Cabecalho.module.css';

const Cabecalho = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('inicio');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <header className={styles.cabecalho}>
      <div className={styles.cabecalhoLogo}>
        <Image src="/img/logo.svg" alt="" width={158} height={56} />
      </div>
      <nav className={`${styles.cabecalhoNav} ${menuOpen ? styles.active : ''}`}>
          <div className={styles.centerLinks}>
            <ul className={`${styles.cabecalhoLista} ${menuOpen ? styles.active : ''}`}>
              <li className={`${styles.cabecalhoListaItem} ${activeLink === 'comoFunciona' ? styles.active : ''}`}>
                <Link href="../como-funciona" onClick={() => handleLinkClick('comoFunciona')}>
                  Como Funciona
                </Link>
              </li>
              <li className={`${styles.cabecalhoListaItem} ${activeLink === 'inicio' ? styles.active : ''}`}>
                <Link href="/" onClick={() => handleLinkClick('inicio')}>
                  Início
                </Link>
              </li>
              <li className={`${styles.cabecalhoListaItem} ${activeLink === 'sobreNos' ? styles.active : ''}`}>
                <Link href="../sobre" onClick={() => handleLinkClick('sobreNos')}>
                  Sobre nós
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.loginItem} >
            <ul className={`${styles.cabecalhoLista} ${menuOpen ? styles.active : ''}`}>
              <li className={`${styles.cabecalhoListaItem} ${activeLink === 'login' ? styles.active : ''}`}>
                <Link href="../login" onClick={() => handleLinkClick('login')}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
      </nav>
      <button
        className={`${styles.cabecalhoButton} ${menuOpen ? styles.active : ''}`}
        aria-expanded={menuOpen}
        aria-label="menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Cabecalho;