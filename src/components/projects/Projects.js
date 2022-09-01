import React from 'react';
import styles from './Projects.module.css';
import { Link } from "react-router-dom";
import { projectsList } from '../../data/projects';

const Projects = () => {
  return (
    <div className={styles.container} id='projects'>
      <h1 className='title-topic'>MEUS PROJETOS</h1>
      <div className={styles.cards}>
        {projectsList && projectsList.map((project) => (
          <div key={project.id} className={styles.cover}>
            <h2>{project.name.toUpperCase()}</h2>
            <img src={project.img} alt="landing page delivery" />
            <Link to={`/project/${project.id}`} className="btn-redirect">Ver detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
