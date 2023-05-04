import React from 'react';
import styles from './About.module.css';

import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: container, inView: containerIsVisible } = useInView();

  return (
    <div
      ref={container}
      className={`${styles.container} ${containerIsVisible ? 'animated_show' : ''}`}
      id='about'
    >
      <h1 className='title-topic'>SOBRE MIM</h1>
      <div className={styles.text}>
        <p>
          Fala, pessoal! 👋 <br />
          Eu sou o Nikolas, um aspirante a Dev FullStack que está sempre em busca de evoluir na carreira. 🚀 <br />
          Atualmente estou na Cubos Academy estudando React, Node e SQL, e também cursando Análise e Desenvolvimento de Sistemas. Além disso, estou sempre buscando aprimorar minhas habilidades de soft skills para complementar meu conhecimento técnico. 💻🧠<br />
          Já comecei a colocar a mão na massa e fiz alguns projetos como freelancer, principalmente desenvolvendo sites. Dá uma olhada no meu portfólio para ver alguns exemplos:<br />
          Estou superempolgado para entrar no mercado e fazer parte de um time de desenvolvimento incrível! 🤩 <br />
          Entre em contato comigo: <br />
          (27)988111598 <br />
          scnoliveira59@gmail.com
        </p>
      </div>
    </div>
  )
}

export default About;
