import { Project } from './Project';
import './ProjectCard.css'
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bool } from 'prop-types';

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
    project: Project;
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

var index = 0;

function ProjectCard(props: ProjectCardProps) {

    const { project } = props;
    const images = project.images;
    const [curImage, setCurImage] = useState(images[0]);

    var maxIndex = images.length - 1;
    const changeImage = (forward: boolean) => {
        var card = document.getElementById("card" + project.id) as HTMLImageElement;
        var forwardArrow = document.getElementById("card" + project.id) as HTMLImageElement;
        var backwardArrow = document.getElementById("card" + project.id) as HTMLImageElement;
        if (forward == true) {
            if (index != maxIndex) {
                index += 1;
                card.src = "assets/" + images[index]
            }
        } else {
            if (index != 0) {
                index -= 1;
                card.src = "assets/" + images[index]
            }
        }
    };

    return (
        <div>
            <div className="card">
                <div className="cardGutter"></div>
                <div className="cardImgWrapper">
                    <img id={"card" + project.id} className="cardImg" src={"assets/" + images[0]} alt={project.name} />
                    <div onClick={() => changeImage(false)} className="arrow leftArrow">&#60;</div>
                    <div onClick={() => changeImage(true)} className="arrow rightArrow">&#62;</div>
                </div>
                <div className="cardInfo">
                    <h5 className="strong">
                        <strong>{project.name}</strong>
                    </h5>
                    <p>{project.description}</p>
                    <div className="cardLinks">
                        {project.siteUrl == undefined &&
                            <a href={project.siteUrl} target="_blank"><div className="cardLink">Website</div></a>
                        }
                        {project.iosUrl == undefined &&
                            <a href={project.iosUrl} target="_blank"><div className="cardLink">App</div></a>
                        }
                        {project.siteUrl == undefined &&
                            <a href={project.githubUrl} target="_blank"><div className="cardLink">Github</div></a>
                        }
                    </div>
                </div>
                <div className="cardGutter"></div>
            </div>
            <hr></hr>
        </div>
    );
}

export default ProjectCard;