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
        <p>Meu nome é Nikolas Oliveira, eu tenho 26 anos e sou uma pessoa apaixonada por tecnologia e em 2020 decidi trilhar o caminho da programação. Focado em Desenvolvimento Web. Aprendi com projetos em cursos envolvendo CRUD, APIs e banco de dados. E nos meus projetos pessoais resolvi focar nas tecnologias voltadas ao Front-End. <br />
          Hoje já entendo tecnologias como ReactJS, Bootstrap, mas também tenho conhecimento de NodeJS, MongoDB, Mysql e busco a cada dia aprender e evoluir mais.</p>
        <p>Frase de efeito retirada do filme <q>À Procura da Felicidade</q>, que me descreve.<br /><q>Posso dizer uma coisa? Hm, eu sou o tipo de pessoa que, se você me fizer uma pergunta e eu não souber a resposta, eu vou te dizer que eu não sei. Mas eu vou apostar com você que eu sei como encontrar a resposta e eu vou encontra-lá.</q></p>
      </div>
    </div>
  )
}

export default About;
