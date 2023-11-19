"use client"

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <section className={styles.section1}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <h1>Seja bem-vindo a HaalkHealth!</h1>
            <p><strong>O cuidado que você mais precisa
              quando e onde quiser</strong></p>
            <Link href="" passHref>
              Agende sua consulta
            </Link>
          </div>
          <div className={styles.rightContent}>
            <Image src="/img/home/home1.svg" alt="" width={862} height={462} />
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <Image src="/img/home/home2.svg" alt="" width={376} height={370} />
          </div>
          <div className={styles.rightContent}>
            <h1>Por que a HaalkHealth?</h1>
            <p><strong>Estamos aqui para auxiliá-lo(a) em suas metas de saúde no ambiente digital. Nossa abordagem híbrida possibilita a prestação de cuidados para diversas pessoas, a qualquer momento e em qualquer lugar.
              Proporcionamos uma experiência de atendimento integrada, simplificando e tornando mais acessível o cuidado com a saúde.</strong></p>
          </div>
        </div>
      </section>

      <section className={styles.section3}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <Image src="/img/home/home3.svg" alt="" width={220} height={374} />
          </div>
          <div className={styles.rightContent}>
            <h1>Além da telessaúde!</h1>
            <p><strong>Nossa plataforma visa ir além dos limites da telessaúde convencional, criando um ecossistema poderoso interligando o atendimento digital aos cuidados presenciais, automatizados e virtuais.</strong></p>
            <p><strong>Junto aos nossos clientes, buscamos transformar e aprimorar cada dia mais a experiência de cuidados, proporcionando  melhores resultados para todos.</strong></p>
          </div>
        </div>
      </section>

      <section className={styles.section4}>
        <div className={styles.fullWidth}>
          <Image src="/img/home/home4_faixa.png" alt="" width={1000} height={300} />
          <div className={styles.overlayContent}>
            <h1>Contate-nos</h1>
            <p><strong>Vamos falar sobre como podemos impulsionar digitalmente suas metas em relação a sua saúde.</strong></p>
            <Link href="" passHref>
              Contate-nos
            </Link>
          </div>
          <div className={styles.overlayImage}>
            <Image src="/img/home/home5.svg" alt="" width={300} height={200} />
          </div>
        </div>
      </section>
    </main >
  )
}
