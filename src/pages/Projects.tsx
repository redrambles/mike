import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data';

function Projects() {
  return (
    <section>
      {projects.map(project => (
        <div key={project.id} className="project-summary">
          <h4>{project.name}</h4>
          <Link to={`/projects/${project.id}`}>Details</Link>
        </div>
      ))}

    </section>
  )
}

export default Projects