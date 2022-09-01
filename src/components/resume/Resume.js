import React from 'react';
import styles from './Resume.module.css';
import imgProfile from '../../images/imgPerfil.png';
import imgGithub from '../../images/githubff.svg';
import imgLinkedin from '../../images/linkedinff.svg';

const Resume = () => {
  return (
    <div className={styles.container} id='resume'>
      <div className={styles.presentation}>
        <div className={styles.text}>
          <h1>Oi, eu sou <span >Nikolas!</span>
          </h1>
          <h2>Desenvolvedor Front End.</h2>
          <h3>HTML, CSS, JS, ReactJS</h3>
        </div>
        <div className={styles.link}>
          {/* upload para github, copiar o link e trocar palavra blob por raw */}
          <a href='https://github.com/nikolassco/asset/raw/main/Curriculo%20Nikolas%20Oliveira.pdf' download='' className='btn-redirect'>Currículo.pdf</a>
        </div>
        <div className={styles.icons}>
          <div className={styles.links1}>
            <a href="https://github.com/nikolassco" target="blank">
              <img
                className={styles.transparente}
                src={imgGithub}
                alt="github-icon"
              />
            </a>
          </div>
          <div className={styles.links2}>
            <a
              href="https://www.linkedin.com/in/nikolas-santa-clara-90619a16a/">
              <img
                className={styles.transparente}
                src={imgLinkedin}
                alt="github-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.img_profile}>
        <img src={imgProfile} alt="Foto do Perfil" />
      </div>
    </div>
  )
}

export default Resume;
