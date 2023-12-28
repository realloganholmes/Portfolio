import React, { useState, useEffect } from 'react';
import { PROJECTS } from './MyProjects';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import './ProjectsPage.css';

function projPrev() {
    const isWork = (value: Project) => value.reason === "work";
    const isSchool = (value: Project) => value.reason === "school";
    const isPersonal = (value: Project) => value.reason === "personal";

    const [currentProjects, setCurrentProjects] = useState(PROJECTS);
    const changeType = (filter: (value: Project) => boolean) => {
        const filteredProjects = PROJECTS.filter(filter);
        const sortedProjects = filteredProjects.sort((a, b) => a.ranking! - b.ranking!);
        setCurrentProjects(sortedProjects);
    };

    useEffect(() => {
        changeType(isPersonal);
    }, []);

    return (
        <>
            <div id="header"><h1>Projects</h1></div>
            <div id="projType">
                <div onClick={() => changeType(isPersonal)} className="projTypeItem">Personal</div>
                <div onClick={() => changeType(isWork)} className="projTypeItem">Work</div>
                <div onClick={() => changeType(isSchool)} className="projTypeItem">School</div>
            </div>
            <div id="showProjects">
                {currentProjects.map((item, i) => (
                    <ProjectCard key={i} project={item}></ProjectCard>
                ))} 
            </div>
        </>
    );
}

export default projPrev;