import React from 'react';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = ({skill, icon}) => (
    <div className='skill-card'>
      <FontAwesomeIcon icon={icon} style={{color: 'grey'}} size='6x' />
      <h2>{skill.name}</h2>
      <ul>
        {skill.list.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
);

export default Skill;
