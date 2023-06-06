import React from 'react';
import { Link } from "react-router-dom";
import { projectsList } from '../../data/projects';
import styles from './styles.module.css';

import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: cards, inView: cardsIsVisible } = useInView();
  const { ref: title, inView: titleIsVisible } = useInView();

  // setar animação para cada card em separado

  return (
    <div className={styles.container} id='projects'>
      <h1 ref={title} className={`title-topic ${titleIsVisible ? 'animated_show' : ''}`}>MEUS PROJETOS</h1>
      <div
        ref={cards}
        className={`${styles.cards} ${cardsIsVisible ? 'animated_show' : ''}`}
      >
        {projectsList && projectsList.map((project) => (
          <div key={project.id} className={styles.cover}>
            <h2 className={styles.cover_name}>{project.name.toUpperCase()}</h2>
            <Link to={`/project/${project.id}`} className="btn-redirect">Ver detalhes</Link>
            <div className='projects-imgs'>
              {project.imgMobile ? (
                <>
                  <img src={project.imgDesktop} alt="Layout da Página Desktop" className='project-img-desktop' />
                  <img src={project.imgMobile} alt="Layout da Página Mobile" className='project-img-mobile' />
                </>
              ) : (
                <img src={project.imgDesktop} alt="Layout da Página Desktop" className='project-img-solo' />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
