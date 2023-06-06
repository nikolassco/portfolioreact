import React from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import { Link, useParams } from "react-router-dom";
import { projectsList } from '../../data/projects';
import styles from './styles.module.css';


const ProjectCard = () => {
  const { id } = useParams();
  const numberId = Number.parseInt(id, 10);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="/" > <IoIosArrowDropleft className={styles.back_icon} /></Link>
      </div>
      {projectsList.filter((project) => project.id === numberId).map((project) => (
        <div key={project.id} className={styles.project}>
          <h1 className='title-topic'>{project.name.toUpperCase()}</h1>
          <div className={styles.project_text}>
            <p>{project.explanation}</p>
          </div>
          <div className={styles.project_links}>
            <div className={styles.project_link}>
              <p>Clique para ver o repositório no GitHub</p>
              <a href={project.githubUrl} className='btn-redirect' target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <div className={styles.project_link}>
              <p>Clique para acessar ao site e testar sua funcionalidade</p>
              <a href={project.pageLink} className='btn-redirect' target="blank" rel="noreferrer">View Live</a>
            </div>
          </div>
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
  )
}

export default ProjectCard;
