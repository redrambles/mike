import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context';

function Projects() {
  const { projects } = useAppContext();

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