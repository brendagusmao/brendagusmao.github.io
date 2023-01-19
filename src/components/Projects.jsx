import React from 'react';
import ProjectCard from './ProjectCard';
import Project from '../data/projects';
import '../css2/Projects.css';

class Projects extends React.Component {
  render() {
    return (
        <div className="backgroundProject" id="projects">
          {/* <div className="sidebarproject"><h1>Projects</h1></div> */}
          <section className="leftb">
            <a href="https://github.com/brendagusmao/" target="_blank" rel="noopener noreferrer" title="live preview">
            <h1>Projects</h1>
            </a>
          </section>
          <section className="left">
          {Project.map((element) => (
              <ProjectCard
                key={ element.name }
                name={ element.name }
                image={ element.image }
                tec2={ element.tec2 }
                tec={ element.tec }
                description={ element.description }
              />
            )) }
          </section>
        </div>
    );
  }
}

export default Projects;