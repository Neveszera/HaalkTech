"use client"

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ComoFunciona.module.css';

export default function ComoFunciona() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const autoPlayIntervalRef = useRef(null);
    const restartDelay = 2000; // Ajuste o tempo de atraso em milissegundos (Quando o button parar de ser acionadao, volta para o automatico)

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
        }, 5000); // Intervalo padrão de 5 segundos
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
            <section
                className={`${styles.section} ${currentSlide === 0 ? styles.active : ''}`}
            >
                <h2>Section 1</h2>
                {/* Conteúdo da Section 1 */}
            </section>

            <section
                className={`${styles.section} ${currentSlide === 1 ? styles.active : ''}`}
            >
                <h2>Section 2</h2>
                {/* Conteúdo da Section 2 */}
            </section>

            <section
                className={`${styles.section} ${currentSlide === 2 ? styles.active : ''}`}
            >
                <h2>Section 3</h2>
                {/* Conteúdo da Section 3 */}
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
                        className={styles.radio}
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