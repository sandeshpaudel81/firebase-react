import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../slices/projectSlice';

const ProjectList = () => {
    const dispatch = useDispatch();
    const {data: projects, success: projectSuccess} = useSelector(state => state.project);

    useEffect(() => {
        if (!projectSuccess){
            dispatch(fetchProjects())
        }
    }, [dispatch, projectSuccess]);
    return (
        <div>
        {projects.map(project => (
            <div key={project.id}>
            <h1>{project.title}</h1>
            <h2>{project.objectives}</h2>
            <h2>{project.id}</h2>
            </div>
        ))}
        </div>
    )
}

export default ProjectList