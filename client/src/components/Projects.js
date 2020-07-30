import React from "react";
import projects from "./data/projects";

const Projects = () => {

  return projects.length ? (
    <section className="projects-section">
      <ul>
        { projects.map(project => (
          <li key={project.id}>
            <div className="projects-card">
              <img className="projects-thumbnail" src={ require(project.thumbnail+"") } alt="projects-thumbnail"/>
              <h1 className="projects-title">{ project.title }</h1>
              <p>{ project.createdAt }</p>
              <p>{ project.info }</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <section className="empty-section">
      <h3>Projects are coming soon!</h3>
    </section>
  );
}

export default Projects;