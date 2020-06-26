import React from 'react';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({
  project,
  demoIcon,
  codeIcon,
  codeURL,
  demoURL,
  hostedAt,
}) => (
  <div className='project-card'>
    <div className='project-card-top'>big box of video</div>
    <h2>{project.name}</h2>
    <h4>Hosted on {hostedAt}</h4>
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
          <a href={demoURL} className='project-demos'>
            <FontAwesomeIcon
              className='project-interact'
              icon={demoIcon}
              style={{ color: 'grey' }}
              size='2x'
            />
            See a Demo
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href={codeURL} className='project-demos'>
            <FontAwesomeIcon
              className='project-interact'
              icon={codeIcon}
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
