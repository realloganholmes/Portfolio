import { useState, useEffect } from 'react';
import { PROJECTS } from './MyProjects';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import './ProjectsPage.css';

function projPrev() {
    const isWork = (value: Project) => value.reason === "work";
    const isPersonal = (value: Project) => value.reason === "personal";

    const [currentProjects, setCurrentProjects] = useState(PROJECTS);
    const changeType = (filter: (value: Project) => boolean) => {
        const filteredProjects = PROJECTS.filter(filter);
        const sortedProjects = filteredProjects.sort((a, b) => a.ranking! - b.ranking!);
        setCurrentProjects(sortedProjects);
    };

    const [currentProject, setCurrentProject] = useState("personal");
    const changeCourse = (project: string) => {
        setCurrentProject(project);
        if (project == "personal") {
            changeType(isPersonal)
        } else {
            changeType(isWork)
        }
    };

    useEffect(() => {
        changeType(isPersonal);
    }, []);

    return (
        <>
            <div className="header"><h1>Projects</h1></div>
            <div id="projType">
                {currentProject == "personal" ?
                    <><div onClick={() => changeCourse("personal")} className="projTypeItem selected">Personal</div><div onClick={() => changeCourse("work")} className="projTypeItem">Work</div></>
                :
                    <><div onClick={() => changeCourse("personal")} className="projTypeItem">Personal</div><div onClick={() => changeCourse("work")} className="projTypeItem selected">Work</div></>
                }
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