import React from 'react';
import styles from './Footer.module.css';
import imgGithub from '../../images/githubff.svg';
import imgLinkedin from '../../images/linkedinff.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Portfolio Desenvolvido por <br /> <span>Nikolas</span> &copy; 2022</p>
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
    </footer>
  )
}

export default Footer;
