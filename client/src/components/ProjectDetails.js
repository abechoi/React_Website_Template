import React from "react";
import { withRouter } from "react-router-dom";

const ProjectDetails = ({project}) => {
  
  return (
    <section className="project-details">
      <h3>{ project.title }</h3>
    </section>
  )
}

export default withRouter(ProjectDetails);