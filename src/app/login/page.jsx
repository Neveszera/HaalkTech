"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Login.module.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/users', {
                method: 'GET',
            });

            if (!response.ok) {
                console.error('Erro ao obter usuários do servidor JSON:', response.statusText);
                return;
            }

            const users = await response.json();
            const user = users.find((u) => u.email === formData.email && u.senha === formData.senha);

            if (user) {
                console.log('Login realizado com sucesso!');
                // Redirecionar para a página do usuário
                window.location.href = '/usuario';
            } else {
                console.log('Login inválido. Verifique suas credenciais.');
            }
        } catch (error) {
            console.error('Erro ao conectar com o servidor JSON:', error);
        }
    };

    return (
        <section className={styles.loginSection}>
            <div className={styles.loginLeft}>
                <div className={styles.loginImage}>
                    <Image src="/img/login.png" alt="" width={748} height={600} />
                </div>
                <div className={styles.signupLink}>
                    <Link href="/cadastro" className={styles.cadastroLink}>
                        Cadastre-se
                    </Link>
                </div>
            </div>
            <div className={styles.loginRight}>
                <div className={styles.loginForm}>
                    <h1>Login</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        name="email"
                    />
                    <div className={styles.passwordInput}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Senha"
                            value={formData.senha}
                            onChange={handleInputChange}
                            name="senha"
                        />
                        <button type="button" onClick={handleTogglePassword}>
                            {showPassword ? (
                                <Image
                                    src="/img/icons/olho-fechado.svg"
                                    alt="Olho fechado para esconder a senha"
                                    width={43}
                                    height={40}
                                />
                            ) : (
                                <Image src="/img/icons/olho-aberto.svg" alt="Olho aberto para mostrar a senha" width={43} height={31} />
                            )}
                        </button>
                    </div>
                    <button className={styles.loginButton} onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;
