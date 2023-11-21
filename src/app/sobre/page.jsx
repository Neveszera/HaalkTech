"use client"

import Image from 'next/image';
import styles from '../../styles/Sobre.module.css';

const membrosDaEquipe = [
    {
        id: 1,
        nome: "Giovanna Alvarez",
        cargo: "Gerente de projetos",
    },
    {
        id: 2,
        nome: "Murilo Matos ",
        cargo: "Java developer",
    },
    {
        id: 3,
        nome: "Sarah Rosa",
        cargo: "Python developer",
    },
    {
        id: 4,
        nome: "Gabriel Lima",
        cargo: "Jovem Aprendiz",
    },
    {
        id: 5,
        nome: "Aleck Ramos",
        cargo: "Estágiario Front",
    },
]

const Sobre = () => {
    return (
        <main>
            <section className={styles.section1}>
                <div className={styles.textos}>
                    <h1>Nossa Empresa</h1>
                    <p>Impulsionando digitalmente os objetivos de bem-estar dos nossos clientes.</p>
                    <br/>
                    <p>Bem-vindo(a) à HaalkHealth, onde a inovação e a saúde se encontram para proporcionar a você uma experiência revolucionária em telemedicina. Nós acreditamos que todos merecem acesso rápido e confiável aos cuidados de saúde, e é por isso que oferecemos um serviço de triagem automatizada líder no setor.</p>
                    <p>Na HaalkHealth, combinamos a expertise médica com as mais recentes tecnologias em inteligência artificial para criar um sistema de triagem que prioriza sua saúde. Nossa missão é simplificar o caminho para cuidados médicos ao fornecer respostas instantâneas e precisas para suas preocupações de saúde.</p>
                    <p>Com a HaalkHealth, você está conectado a um ecossistema de saúde moderno, onde a telemedicina encontra a excelência em atendimento. Sua jornada de saúde começa aqui, na HaalkHealth, onde a inovação se encontra com a compaixão, oferecendo a você a tranquilidade de cuidados médicos acessíveis, personalizados e eficazes.</p>
                </div>
                <div className={styles.imagemSection1}>
                    <Image src="/img/sobre/sobre1.png" alt="" width={510} height={570} />
                </div>
            </section>

            <section className={styles.section2}>
                <div className={styles.nossaEquipe}>
                    <h1>Nossa Equipe</h1>
                    <div className={styles.membros}>
                        {membrosDaEquipe.map((membro) => (
                            <div key={membro.id} className={styles.membro}>
                                <h3>{membro.nome}</h3>
                                <p>{membro.cargo}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.imagemEquipe}>
                    <Image src="/img/sobre/sobre2.png" alt="" width={948} height={550} />
                </div>
            </section>
        </main>
    );
}

export default Sobre;