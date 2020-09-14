import React from 'react';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({ project }) => (
  <div className='project-card'>
    <div className='project-card-top'>
      {project.demoMp4 ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            borderTopRightRadius: '17px',
            borderTopLeftRadius: '17px',
            borderBottom: '2px solid grey',
            maxWidth: '375px',
          }}>
          <source src={project.demoMp4} type='video/mp4' />
        </video>
      ) : (
        <img
          alt='stocks news project'
          src={project.demoimg}
          style={{
            borderTopRightRadius: '17px',
            borderTopLeftRadius: '17px',
            borderBottom: '2px solid grey',
            maxWidth: '375px',
          }}></img>
      )}
    </div>
    <h2>{project.name}</h2>
    <h4>Hosted on {project.hostedAt}</h4>
    <div className='project-description'>{project.description}</div>
    <h4>Technologies Used</h4>
    <ul className='project-technologies'>
      {project.technologies.map((project) => (
        <li key={project}>{project}</li>
      ))}
    </ul>
    <ul className='project-discovery'>
      <li>
        <div>
          <a href={project.demoURL} className='project-demos'>
            <FontAwesomeIcon
              className='project-interact'
              icon={project.demoIcon}
              style={{ color: 'grey' }}
              size='2x'
            />
            See a Demo
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href={project.codeURL} className='project-demos'>
            <FontAwesomeIcon
              className='project-interact'
              icon={project.codeIcon}
              style={{ color: 'grey' }}
              size='2x'
            />
            See the Code
          </a>
        </div>
      </li>
    </ul>
  </div>
);

export default Project;
