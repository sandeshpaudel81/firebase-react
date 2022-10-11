import React from 'react'
import { useSelector } from 'react-redux'

const ProjectList = () => {
  const projects = useSelector(state => state.projectList)
  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <h1>{project.title}</h1>
          <h2>{project.content}</h2>
        </div>
      ))}
    </div>
  )
}

export default ProjectList