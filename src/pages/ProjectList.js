import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../slices/projectSlice';

const ProjectList = () => {
    const dispatch = useDispatch();
    const {data: projects, status} = useSelector(state => state.project);

    useEffect(() => {
        dispatch(fetchProjects())
    }, [dispatch]);
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