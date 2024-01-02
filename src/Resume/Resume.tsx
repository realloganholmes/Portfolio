import './Resume.css';

function resume() {
    return (
        <>
            <div className="header"><h1>Resume</h1></div>
            <div className="resumeWrapper">
                <img src="assets/Holmes_Logan_Resume.png" />
                <div className="resumeDownloads">
                    <a href="assets/Holmes_Logan_Resume.pdf" download="Holmes_Logan_Resume.pdf">Download PDF</a>
                    <a href="assets/Holmes_Logan_Resume.docx" download="Holmes_Logan_Resume.docx">Download Word</a>
                </div>
            </div>
        </>
    );
}

export default resume;