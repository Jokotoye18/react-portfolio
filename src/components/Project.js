import React, { Component } from "react";
// import ProjectLoading from '../components/ProjectLoading'
import ProjectItem from "./ProjectItem";
import { getUnique } from "../utils/utils";

class Project extends Component {
  openProject = () => {
    const openProjects = document.querySelector("#projects");
    let body = document.querySelector("body");
    if (openProjects.textContent.toLowerCase() !== "see my projects") {
      openProjects.textContent = "see my projects";
    } else {
      openProjects.textContent = "close projects";
    }
    body.classList.toggle("make-projects-visible");
  };

  render() {
    const { projects, filter, filterProjects } = this.props;

    const options = getUnique(projects).map((option) => (
      <option value={option}>{option}</option>
    ));

    const projectComponents = filterProjects.map((project) => {
      return <ProjectItem project={project} maxLength={70} key={project.id} />;
    });

    const handleChange = (e) => {
      filter(e.target.value);
    };

    console.log(getUnique(projects));
    return (
      <>
        <section className="open-projects">
          <div className="container">
            <button
              onClick={this.openProject}
              id="projects"
              className="btn btn-link"
            >
              see my projects
            </button>
          </div>
        </section>
        <section className="project-section">
          <div className="container">
            <h3 className="project-head">Live Projects</h3>
            <div className="filter">
              <form className="filter-form">
                <div className="control">
                  <label htmlFor="tech">Project Tech</label>
                  <select id="tech" name="tech" onChange={handleChange}>
                    {options}
                  </select>
                </div>
              </form>
            </div>
            <div className="project-grid">{projectComponents}</div>
          </div>
        </section>
      </>
    );
  }
}

export default Project;
