"use client"

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ComoFunciona.module.css';

export default function ComoFunciona() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const autoPlayIntervalRef = useRef(null);
    const restartDelay = 10000; // Tempo de atraso em milissegundos (Quando o button parar de ser acionadao, volta para o automatico)

    useEffect(() => {
        startAutoPlay();

        // Limpa o intervalo quando o componente é desmontado
        return () => {
            clearInterval(autoPlayIntervalRef.current);
        };
    }, []);

    const startAutoPlay = () => {
        // Inicia o intervalo para mudar automaticamente de slide
        autoPlayIntervalRef.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
        }, 10000); // Intervalo padrão de 9 segundos
    };

    const handleRadioChange = (index) => {
        // Limpa o intervalo ao interagir manualmente com os botões ou radio buttons
        clearInterval(autoPlayIntervalRef.current);
        setCurrentSlide(index);

        // Adiciona um atraso antes de reiniciar o intervalo
        setTimeout(startAutoPlay, restartDelay);
    };

    const handlePrevSlide = () => {
        // Limpa o intervalo ao interagir manualmente com os botões ou radio buttons
        clearInterval(autoPlayIntervalRef.current);
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);

        // Adiciona um atraso antes de reiniciar o intervalo
        setTimeout(startAutoPlay, restartDelay);
    };

    const handleNextSlide = () => {
        // Limpa o intervalo ao interagir manualmente com os botões ou radio buttons
        clearInterval(autoPlayIntervalRef.current);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);

        // Adiciona um atraso antes de reiniciar o intervalo
        setTimeout(startAutoPlay, restartDelay);
    };

    return (
        <main className={styles.carousel}>
            <section className={`${styles.section} ${currentSlide === 0 ? styles.active : ''}`}>
                <div className={styles.trapezoid}></div>
                <div className={styles.content}>
                    <h1>Cadastre-se de forma rápida e prática</h1>
                    <p>Em apenas alguns passos, você terá acesso à nossa plataforma e serviços ao seu dispor
                        quando necessário. Sua saúde está a apenas alguns cliques de distância!</p>
                    <p>Cadastre-se agora e experimente a praticidade da HaalkHealth!</p>
                    <Link href="/" className={styles.link}>Cadastre-se Agora</Link>
                </div>
            </section>

            <section className={`${styles.section} ${currentSlide === 1 ? styles.active : ''}`}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/img/comoFunciona/mobile1.svg"
                        alt="Celular ilustrando conversa com o chatbot da HaalkHealth, o Haalkinho."
                        width={194}
                        height={470}
                    />
                </div>
                <div className={styles.trapezoidSmall}></div>
                <div className={styles.content2}>
                    <h1>Nosso Chatbot</h1>
                    <p>&bull; Em todas as nossas páginas, você pode &nbsp;&nbsp;&nbsp;&nbsp;clicar no ícone do chatbot</p>
                    <p>&bull; Diga ao bot os <br /> &nbsp;&nbsp;&nbsp;&nbsp;seus sintomas</p>
                    <p>&bull; O bot fará diversas <br /> &nbsp;&nbsp;&nbsp;&nbsp;perguntas para você</p>
                    <p>&bull; Ao final da conversa, ele terá suas &nbsp;&nbsp;&nbsp;&nbsp;informações para passar para um médico</p>
                    <h1 className={styles.last}>Viu como é fácil?</h1>
                </div>
            </section>

            <section className={`${styles.section} ${currentSlide === 2 ? styles.active : ''}`}>
                <div className={styles.section3}>
                    <div className={styles.imageContainer3}>
                        <Image
                            src="/img/comoFunciona/fitaVerde.svg"
                            alt="Fita verde para ilustração e melhor apresentação do site."
                            width={216}
                            height={384}
                            className={styles.imageFita}
                        />
                        <Image
                            src="/img/comoFunciona/mobile2.svg"
                            alt="Celular ilustrando conversa com o chatbot da HaalkHealth, o Haalkinho."
                            width={189}
                            height={400}
                            className={styles.imageMobile2}
                        />
                    </div>
                    <div className={styles.textContainer3}>
                        <div className={styles.textContent3}>
                            <h1>Agende/desmarque sua consulta <br /> conforme desejar!</h1>
                            <p>Uma interação direta com o chatbot você <br /> poderá agendar consultas, remarca-las ou até mesmo realizar o cancelamento da <br /> mesma.</p>
                            <p>Tudo completamente online e sem fila de <br /> espera!</p>
                            <Link href="/login" className={styles.link3}>Agende sua consulta</Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handlePrevSlide}>
                    Anterior
                </button>
                {[0, 1, 2].map((index) => (
                    <input
                    key={index}
                    type="radio"
                    name="slide-radio"
                    className={`${styles.radio} ${currentSlide === index ? styles.checked : ''}`}
                    checked={currentSlide === index}
                    onChange={() => handleRadioChange(index)}
                  />
                ))}
                <button className={styles.button} onClick={handleNextSlide}>
                    Próximo
                </button>
            </div>
        </main>
    );
}