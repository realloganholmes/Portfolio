import { useState, useEffect } from 'react';
import { COURSES } from './MyCourses';
import { Course } from './Course';
import CourseCard from './CourseCard';
import './CoursePage.css';

function coursePrev() {
    const sortedCourses = COURSES.sort((a, b) => a.ranking! - b.ranking!);

    const [currentCourse, setCurrentCourse] = useState(sortedCourses[0]);
    const changeCourse = (course: Course) => {
        setCurrentCourse(course);
    };

    return (
        <>
            <div className="header"><h1>Course Work</h1></div>
            <div className="courseList">
                {sortedCourses.map((item, i) => (
                    (currentCourse.name == item.name ?
                        <div onClick={() => changeCourse(item)} key={i} className="selected">{item.name}</div>
                        :
                        <div onClick={() => changeCourse(item)} key={i}>{item.name}</div>)
                ))}
            </div>
            <div id="showCourse">
                <CourseCard course={currentCourse}></CourseCard>
            </div>
        </>
    );
}

export default coursePrev;