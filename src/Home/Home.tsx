import './Home.css';

function home() {
    return (
        <div className="homeContainer">
            <div className="homeWrapper">
                <div className="homeGutter"></div>
                <div className="homeImage">
                    <img src="assets/headshot.jpeg"/>
                </div>
                <div className="homeInfo">
                    <div className="homeName">Logan Holmes</div>
                    <div className="homeContact"><b>logan.holmes@utah.edu | 859-620-7777</b></div>
                    <div className="homeDegree"><b>B.S. Computer Science | Minor Mathematics | University of Utah</b></div>
                    <div className="homeBio">Welcome to my portfolio! I am a passionate problem solver and enjoy thinking through difficult issues to find an efficient solution.Computer Science allows me to put my problem solving skills into action. I pride myself on my ability to work independently and pick up new technologies quickly with minimal oversight. Outside of school, I am involved in my community through work with Special Olympics and Running Forward. My other hobbies include running, skiing, and golfing.</div>
                </div>
                <div className="homeGutter"></div>
            </div>
            <div className="arrow-bounce bounce"></div>
        </div>
    );
}

export default home;