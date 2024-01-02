import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Projects from './Project/ProjectsPage';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import CourseWork from './CourseWork/CoursePage';
import Involvement from './Involvement/InvolvementPage';
import reportWebVitals from './reportWebVitals';
import SideNav from './sideNav';
import { Waypoint } from 'react-waypoint';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App: React.FC = () => {
    const entered = function (args: any) {
        var current = 0;
        const sideNav = document.getElementsByClassName("side-navigation")[0] as HTMLElement;
        if (args == "Home") {
            sideNav.style.top = "200px";
        } else if (args == "Resume") {
            sideNav.style.top = "100px";
            current = 1;
        } else if (args == "Courses") {
            sideNav.style.top = "0px";
            current = 2;
        } else if (args == "Involvement") {
            sideNav.style.top = "-100px";
            current = 3;
        } else if (args == "Projects") {
            sideNav.style.top = "-200px";
            current = 4;
        }

        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            var htmlItem = item as HTMLElement;
            var diff = current - index;
            item.classList.remove('transparent0');
            item.classList.remove('transparent1');
            item.classList.remove('transparent2');
            item.classList.remove('transparent3');
            item.classList.remove('transparent4');

            htmlItem.style.transform = "rotate(" + (-20 * diff) + "deg) translate(" + (-3 * Math.abs(diff) ** 2) + "px, " + (-7 * diff * Math.abs(diff)) + "px)";
            item.classList.add('transparent' + Math.abs(diff));
        });
    }

    return (
        <>
            <SideNav />
            <div id="snapContainer">
                <Waypoint onEnter={entered.bind(this, 'Home')} topOffset="40%" bottomOffset="40%">
                    <div className="bodySection" id="Home">
                        <Home />
                    </div>
                </Waypoint>
                <Waypoint onEnter={entered.bind(this, 'Resume')} topOffset="40%" bottomOffset="40%">
                    <div className="bodySection" id="Resume">
                        <Resume />
                    </div>
                </Waypoint>
                <Waypoint onEnter={entered.bind(this, 'Courses')} topOffset="40%" bottomOffset="40%">
                    <div className="bodySection" id="Courses">
                        <CourseWork />
                    </div>
                </Waypoint>
                <Waypoint onEnter={entered.bind(this, 'Involvement')} topOffset="40%" bottomOffset="40%">
                    <div className="bodySection" id="Involvement">
                        <Involvement />
                    </div>
                </Waypoint>
                <Waypoint onEnter={entered.bind(this, 'Projects')} topOffset="40%" bottomOffset="40%">
                    <div className="bodySection" id="Projects">
                        <Projects />
                    </div>
                </Waypoint>
            </div>
        </>
    );
};

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
