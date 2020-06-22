import React, { Component } from 'react';
import Skill from './Skill';
import {
  faServer,
  faDatabase,
  faGlobe,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

// ref docs at https://github.com/FortAwesome/react-fontawesome#get-started

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          id: 0,
          name: 'FRONT END',
          list: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
          icon: faLaptopCode,
        },
        {
          id: 1,
          name: 'BACK END',
          list: ['Node.js', 'Express', 'Python'],
          icon: faServer,
        },
        {
          id: 2,
          name: 'DATABASES',
          list: ['MongoDB', 'PostgreSQL'],
          icon: faDatabase,
        },
        {
          id: 3,
          name: 'CLOUD',
          list: ['AWS', 'Heroku'],
          icon: faGlobe,
        },
      ],
    };
  }
  render() {
    const { skills } = this.state;
    return (
      <section id='skills'>
        <h1>SKILLS</h1>
        <div className='skills-container'>
          {skills.map((skill) => (
            <Skill key={skill.name} skill={skill} icon={skill.icon} />
          ))}
        </div>
      </section>
    );
  }
}

export default Skills;
