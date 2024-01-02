import { Course } from './Course';
import MyCarousel from './MyCarousel';
import './CourseCard.css'
import 'react-multi-carousel/lib/styles.css';

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

interface CourseCardProps {
    course: Course;
}

function CourseCard(props: CourseCardProps) {

    const course = props.course;

    return (
        <div>
            <div className="card">
                <div className="cardGutter"></div>
                <MyCarousel course={course} />
                <div className="cardInfo">
                    <h1 className="m-0">{course.name}</h1>
                    <p>{course.description}</p>
                    <div className="cardLinksWrapper">
                        <div className="cardLinks">
                            {course.technologies.map((item, i) => (
                                <div key={i} className="cardTextBox">{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="cardGutter"></div>
            </div>
        </div>
    );
}

export default CourseCard;