import React, { Component } from 'react';
import Project from './Project';
import { faPlay, faCode } from '@fortawesome/free-solid-svg-icons';
import yelpcampvideo from './Videos/yelpCampVideo2.mp4';
import myreadsvideo from './Videos/myReadsDemo.mp4';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 0,
          name: 'YelpCamp',
          description:
            "This project is a Full Stack Web App that allows users to create, edit, and update campgrounds in a database.",
          technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Node.js',
            'Express',
            'MongoDB',
          ],
          demoIcon: faPlay,
          codeIcon: faCode,
          codeURL: 'https://github.com/rschalo/yelpCampRSDemo',
          demoURL: 'https://lit-sierra-70695.herokuapp.com/',
          hostedAt: 'Heroku',
          demoMp4: yelpcampvideo
        },
        {
          id: 1,
          name: 'MyReads Book App',
          description:
            'This project is a Single Page Application that allows user to search for and update reading status of books.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
          demoIcon: faPlay,
          codeIcon: faCode,
          codeURL: 'https://github.com/rschalo/Udacity-React-Nanodegree',
          demoURL: 'https://master.d2tkw00rmowzbl.amplifyapp.com/',
          hostedAt: 'AWS',
          demoMp4: myreadsvideo
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
              demoGif={project.demoGif}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default ProjectList;
