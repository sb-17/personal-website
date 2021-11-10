import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProjectContainer = (props) => {
    const project = props.project;

    return (
        <div className="project-container">
            <div className="desc">
                <h2>
                    <Link to={`/project/${project._id}`}>
                        <h4>{project.title} | {project.language}</h4>
                    </Link>
                </h2>
                <br />
                <p>{project.description}</p>
                <br />
                <p>{project.status}</p>
            </div>
        </div>
    )
};

export default ProjectContainer;