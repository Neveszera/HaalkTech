"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Login.module.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleLogin = () => {
        // Lógica para realizar o login
        console.log('Login realizado!');
    };

    return (
        <section className={styles.loginSection}>
            <div className={styles.loginLeft}>
                <div className={styles.loginImage}>
                    <Image src="/img/login.png" alt="" width={748} height={600} />
                </div>
                <div className={styles.signupLink}>
                    <Link href="/cadastro" className={styles.cadastroLink}>Cadastre-se</Link>
                </div>
            </div>
            <div className={styles.loginRight}>
                <div className={styles.loginForm}>
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" />
                    <div className={styles.passwordInput}>
                        <input type={showPassword ? 'text' : 'password'} placeholder="Senha" />
                        <button type="button" onClick={handleTogglePassword}>
                            {showPassword ? (
                                <Image src="/img/icons/olho-fechado.svg" alt="Olho fechado para esconder a senha" width={43} height={40} />
                            ) : (
                                <Image src="/img/icons/olho-aberto.svg" alt="Olho aberto para mostrar a senha" width={43} height={31} />
                            )}
                        </button>
                    </div>
                    <button className={styles.loginButton} onClick={handleLogin}>Login</button>
                </div>
            </div>
        </section>
    );
};

export default Login;
