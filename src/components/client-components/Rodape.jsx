"use client"

import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Rodape.module.css';

export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.rights}>
                    <p>&copy; HaalkTech 2023 . Todos os direitos reservados</p>
                </div>
                <div className={styles.socialIcons}>
                    <Link href="https://www.instagram.com/" passHref>
                        <Image src="/img/icons/icon_insta.svg" alt="Ícone do Instagram" width={30} height={30} />
                    </Link>
                    <Link href="https://www.linkedin.com/" passHref>
                        <Image src="/img/icons/icon_linkedin.svg" alt="Ícone do Linkedin" width={30} height={30} />
                    </Link>
                    <Link href="https://github.com/" passHref>
                        <Image src="/img/icons/icon_github.svg" alt="Ícone do GitHub" width={30} height={30} />
                    </Link>
                </div>
                <div className={styles.text}>
                    <p><strong>Telefone:</strong> Telefone: 4002-8922</p>
                    <p><strong>Email:</strong> Haalktech@gmail.com</p>
                    <p><strong>Av.paulista 0000, Bela vista, São Paulo</strong></p>
                </div>
            </div>
        </footer >
    );
}