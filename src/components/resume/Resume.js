import React from 'react';
import styles from './Resume.module.css';
import { BigHead } from '@bigheads/core';
import imgGithub from '../../images/githubff.svg';
import imgLinkedin from '../../images/linkedinff.svg';

import { useInView } from 'react-intersection-observer';

const Resume = () => {
  const { ref: container, inView: containerIsVisible } = useInView();

  return (
    <div
      ref={container}
      className={`${styles.container} ${containerIsVisible ? 'animated_show' : ''}`}
      id='resume'
    >
      <div className={styles.presentation}>
        <div className={styles.text}>
          <h1>Oi, eu sou <span >Nikolas!</span>
          </h1>
          <h2>Desenvolvedor Full-Stack.</h2>
          <h3>JS, React, Node, SQL</h3>
        </div>
        <div className={styles.link}>
          {/* upload para github, copiar o link e trocar palavra blob por raw */}
          <a href='https://github.com/nikolassco/asset/raw/main/Curriculo%20Nikolas%20Oliveira.pdf' download='' className='btn-redirect' target="blank" rel="noreferrer">Baixar currículo.pdf </a>
        </div>
        <div className={styles.icons}>
          <div className={styles.links1}>
            <a href="https://github.com/nikolassco" target="blank" rel="noreferrer">
              <img
                className={styles.transparente}
                src={imgGithub}
                alt="github-icon"
              />
            </a>
          </div>
          <div className={styles.links2}>
            <a
              href="https://www.linkedin.com/in/nikolas-santa-clara-90619a16a/" target="blank" rel="noreferrer">
              <img
                className={styles.transparente}
                src={imgLinkedin}
                alt="github-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <BigHead className={styles.caricatureBigHead}
        accessory="shades"
        body="chest"
        circleColor="blue"
        clothing="shirt"
        clothingColor="black"
        eyebrows="raised"
        eyes="happy"
        faceMaskColor={false}
        facialHair="none"
        graphic="react"
        hair="pixie"
        hairColor="brown"
        hat="none"
        hatColor="white"
        lipColor="red"
        mouth="grin"
        skinTone="yellow"
      />
    </div>
  )
}

export default Resume;
