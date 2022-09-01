import React from 'react';
import { Link, useParams } from "react-router-dom";
import { projectsList } from '../../data/projects';
import styles from './ProjectCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = () => {
  const { id } = useParams();
  const numberId = Number.parseInt(id, 10);

  return (
    <>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link to="/" >Voltar <FontAwesomeIcon icon={faHome} /></Link>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        {projectsList.filter((project) => project.id === numberId).map((project) => (
          <div key={project.id} className={styles.project}>
            <h1 className='title-topic'>{project.name.toUpperCase()}</h1>
            <div className={styles.project_text}>
              <p>{project.explanation}</p>
            </div>
            <div className={styles.project_links}>
              <div className={styles.project_link}>
                <p>Clique para ver o repositório no GitHub</p>
                <a href={project.githubUrl} className='btn-redirect'>GitHub</a>
              </div>
              <div className={styles.project_link}>
                <p>Clique para acessar ao site e testar sua funcionalidade</p>
                <a href={project.pageLink} className='btn-redirect'>View Live</a>
              </div>
            </div>
            <img src={project.img} alt="Layout da Página" />
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectCard;
