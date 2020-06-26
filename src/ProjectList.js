import React, { Component } from 'react';
import Project from './Project';
import { faPlay, faCode } from '@fortawesome/free-solid-svg-icons';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 0,
          name: 'YelpCamp',
          description:
            "This project is a Single Page Application tracks a user's reading status of books in a database.",
          technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Node.js',
            'Express',
            'MongoDB',
          ],
          demoIcon: faPlay,
          code: faCode,
          codeURL: 'https://github.com/rschalo/yelpCampRSDemo',
          demoURL: 'https://lit-sierra-70695.herokuapp.com/',
        },
        {
          id: 1,
          name: 'MyReads Book App',
          description:
            'This project is a Single Page Application that allows user to search for and update reading status of books.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
          demoIcon: faPlay,
          code: faCode,
          codeURL: 'https://github.com/rschalo/Udacity-React-Nanodegree',
          demoURL: 'https://master.d2tkw00rmowzbl.amplifyapp.com/',
        },
      ],
    };
  }
  render() {
    const { projects } = this.state;
    return (
      <section id='projects'>
        <h1>PROJECTS</h1>
        <div className='project-container'>
          {projects.map((project) => (
            <Project
              key={project.name}
              project={project}
              demoIcon={project.demoIcon}
              code={project.code}
              codeURL={project.codeURL}
              demoURL={project.demoURL}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default ProjectList;
