import React, {useEffect, useState} from 'react'
import { db } from '../firebase-config'
import { collection, onSnapshot, query } from 'firebase/firestore'

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const projectsRef =  collection(db, "projects")
    const q = query(projectsRef);
    onSnapshot(q, (snapshot) => {
      const projects = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projects)
    })
  }, []);
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