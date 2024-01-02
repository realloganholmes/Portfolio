import { Project } from './Project';
import MyCarousel from './MyCarousel';
import './ProjectCard.css'
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
    project: Project;
}

function ProjectCard(props: ProjectCardProps) {

    const project = props.project;

    return (
        <div>
            <div className="card">
                <div className="cardGutter"></div>
                <MyCarousel project={project} />
                <div className="cardInfo">
                    <h1 className="m-0">{project.name}</h1>
                    <p>{project.description}</p>
                    <div className="cardLinksWrapper">
                        <div className="cardLinks">
                            {project.technologies.map((item, i) => (
                                <div key={i} className="cardTextBox">{item}</div>
                            ))}
                        </div>
                        <div className="cardLinks">
                            {project.siteUrl != undefined &&
                                <a href={project.siteUrl} target="_blank"><div className="cardLink"><FontAwesomeIcon icon={faGlobe} /></div></a>
                            }
                            {project.iosUrl != undefined &&
                                <a href={project.iosUrl} target="_blank"><div className="cardLink"><FontAwesomeIcon icon={faApple} /></div></a>
                            }
                            {project.githubUrl != undefined &&
                                <a href={project.githubUrl} target="_blank"><div className="cardLink"><FontAwesomeIcon icon={faGithub} /></div></a>
                            }
                        </div>
                    </div>
                </div>
                <div className="cardGutter"></div>
            </div>
            <hr></hr>
        </div>
    );
}

export default ProjectCard;