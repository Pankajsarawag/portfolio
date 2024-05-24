import "./Project.css";
import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

import YTBookmark from "./projects/YT-bookmark";
import Portfolio from "./projects/portfolio";
import PianoTiles from "./projects/piano-tiles";
import Dictionary from "./projects/dictionary";
import Quiz from "./projects/quiz";

export default function Projects() {
    const [activeProject, setActiveProject] = useState<string>("");
    const [animation, setAnimation] = useState<string>("");

    const showProject = (project: string) => {
        setAnimation("zoom-out full-page-animation");
        setTimeout(() => {
            setActiveProject(project);
            setAnimation("zoom-in full-page-animation");
        }, 10);
    }

    const goBack = () => {
        setAnimation("zoom-out full-page-animation");
        setTimeout(() => {
            setActiveProject("");
            setAnimation("zoom-in full-page-animation");
        }, 10);
    }

    return (
        <div className={animation}>
            {activeProject === "" ? (
                <div className="project-main">
                    <h1 className="software-projects">Software Projects</h1>
                    <div className="wrapper">
                        <div className="project">
                            <div className="project-box"
                                onClick={() => showProject("YTBookmark")}>
                                <div className="img-div">
                                    <img src="./ytbookmark-1.png" alt="YouTube Bookmark 1" />
                                    <img src="./ytbookmark-2.png" alt="YouTube Bookmark 2" />
                                </div>
                                <h1>YouTube Video Bookmark</h1>
                                <p>React.js, CSS, Plasmo, TypeScript, Express.js, OAuth 2.0, MongoDB</p>
                            </div>

                            <div className="project-box"
                                onClick={() => showProject("Portfolio")}>
                                <div className="img-div">
                                    <img src="./portfolio.png" alt="Portfolio" />
                                </div>
                                <h1>Portfolio Website</h1>
                                <p>Next.js, CSS, TypeScript, React.Js, EmailJS</p>
                            </div>

                            <div className="project-box"
                                onClick={() => showProject("PianoTiles")}>
                                <div className="img-div">
                                    <img src="./piano-tiles.png" alt="Piano Tiles" />
                                </div>
                                <h1>Piano tiles</h1>
                                <p>HTML, CSS, JavaScript</p>
                            </div>

                            <div className="project-box"
                                onClick={() => showProject("Dictionary")}>
                                <div className="img-div">
                                    <img src="./dictionary.png" alt="Dictionary" />
                                </div>
                                <h1>Dictionary Website</h1>
                                <p>HTML, CSS, JavaScript, dictionary API</p>
                            </div>

                            <div className="project-box"
                                onClick={() => showProject("Quiz")}>
                                <div className="img-div">
                                    <img src="./quiz-1.png" alt="Quiz" />
                                </div>
                                <h1>Quiz Website</h1>
                                <p>HTML, CSS, JavaScript, Quiz API</p>
                            </div>
                        </div>
                    </div>

                    <h1 className="electronics-projects">Electronics Projects</h1>
                    <div className="wrapper">
                        <div className="project">
                            <div className="project-box">
                                <div className="img-div">
                                    <img src="./noise.png" alt="Live Video Noise Removal" />
                                </div>
                                <h1>Live video Noise Removal using Jetson Nano</h1>
                            </div>

                            <div className="project-box">
                                <div className="img-div">
                                    <img src="./speed.png" alt="Speed Detection" />
                                </div>
                                <h1>Speed Detection Using IR Sensor</h1>
                            </div>

                            <div className="project-box">
                                <div className="img-div">
                                    <img src="./soil.png" alt="Smart Irrigation" />
                                </div>
                                <h1>Smart Irrigation Using Soil Moisture Sensor</h1>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="project-explore">
                    <Button className="backbtn" onClick={goBack} variant="outlined"><ArrowBackIcon style={{ marginRight: 2 }} /> Back</Button>
                    {activeProject === "YTBookmark" && <YTBookmark />}
                    {activeProject === "Dictionary" && <Dictionary />}
                    {activeProject === "Quiz" && <Quiz />}
                    {activeProject === "PianoTiles" && <PianoTiles />}
                    {activeProject === "Portfolio" && <Portfolio />}
                </div>
            )}
        </div>
    );
}
