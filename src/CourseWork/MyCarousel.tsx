import { Course } from './Course';
import './CourseCard.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useRef } from 'react';

interface MyCarouselProps {
    course: Course;
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

function MyCarousel(props: MyCarouselProps) {

    const project = props.course;
    const images = project.images;

    const carouselRef = useRef<Carousel | null>(null);

    useEffect(() => {
        carouselRef.current?.goToSlide(0);
    });

    if (images[0] == 'no_image.jpg') {
        return (
            <Carousel
                ref={carouselRef}
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={false}
                containerClass="cardCarouselWrapper"
                sliderClass="cardCarouselList"
            >
                <img draggable="false" key="1" src={"assets/" + images[0]} alt={project.name} className="cardImg" />
            </Carousel>
        );
    } else {
        return (
            <Carousel
                ref={carouselRef}
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={false}
                containerClass="cardCarouselWrapper"
                sliderClass="cardCarouselList"
            >
                {images.map((imageUrl, index) => {
                    return (
                        <img draggable="false" key={index} src={"assets/" + imageUrl} alt={project.name} className="cardImg" />
                    );
                })}
            </Carousel>
        );
    }
}

export default MyCarousel;