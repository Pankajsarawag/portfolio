import "./Project.css";
import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import YTBookmark from "./projects/YT-bookmark";
export default function Projects() {
    const [Project, setProject] = useState<boolean>(true);
    const [YtBookmark, setYTBookmark] = useState<boolean>(false);
    const [dictionary, setDictionary] = useState<boolean>(false);
    const [quiz, setQuiz] = useState<boolean>(false);
    const [pianoTiles, setPianoTiles] = useState<boolean>(false);
    const [portfolio, setPortfolio] = useState<boolean>(false);

    const parameters = () => {
        setProject(!Project);
        setYTBookmark(!YtBookmark);
        setDictionary(!dictionary);
        setQuiz(!quiz);
        setPianoTiles(!pianoTiles);
        setPortfolio(!portfolio);
    }

    return (
        <>
            {Project ? (
                <div className="project-main">
                    <h1 className="software-projects">Software Projects</h1>
                    <div className="wrapper">
                        <div className="project">
                            <div className="project-box"
                                onClick={() => { setProject(!Project); setYTBookmark(!YtBookmark) }}>
                                <div className="img-div">
                                    <img src="./ytbookmark-1.png" alt="" />
                                    <img src="./ytbookmark-2.png" alt="" />
                                </div>
                                <h1>YouTube Video Bookmark</h1>
                                <p>React.js, CSS, Plasmo, TypeScript, Express.js, OAuth 2.0, MongoDB</p>
                            </div>

                            <div className="project-box"
                                onClick={() => { setProject(!Project); setPortfolio(!portfolio) }}>
                                <div className="img-div">
                                    <img src="./portfolio.png" alt="" />
                                </div>
                                <h1>Portfolio Website</h1>
                                <p>Next.js, CSS, TypeScript, React.Js, EmailJS</p>
                            </div>

                            <div className="project-box"
                                onClick={() => { setProject(!Project); setPianoTiles(!pianoTiles) }}>
                                <div className="img-div">
                                    <img src="./piano-tiles.png" alt="" />
                                </div>
                                <h1>Piano tiles</h1>
                                <p>HTML, CSS, JavaScript</p>
                            </div>

                            <div className="project-box"
                                onClick={() => { setProject(!Project); setDictionary(!dictionary) }}>
                                <div className="img-div">
                                    <img src="./dictionary.png" alt="" />
                                </div>
                                <h1>Dictionary Website</h1>
                                <p>HTML, CSS, JavaScript, dictionary API</p>
                            </div>

                            <div className="project-box"
                                onClick={() => { setProject(!Project); setQuiz(!quiz) }}>
                                <div className="img-div">
                                    <img src="./quiz-1.png" alt="" />
                                </div>
                                <h1>Quiz Website</h1>
                                <p>HTML, CSS, JavaScript, Quiz API</p>
                            </div>
                        </div>
                    </div>

                    <h1 className="electronics-projects">Electronics Projects</h1>
                    <div className="wrapper">
                        <div className="project">
                            <div className="project-box"
                                onClick={() => { setProject(!Project); setYTBookmark(!YtBookmark) }}>
                                <div className="img-div">
                                    <img src="./ytbookmark-1.png" alt="" />
                                    <img src="./ytbookmark-2.png" alt="" />
                                </div>
                                <h1>YouTube Video Bookmark</h1>
                                <p>React.js, CSS, Plasmo, TypeScript, Express.js, OAuth 2.0, MongoDB</p>
                            </div>

                            <div className="project-box"
                                onClick={() => { setProject(!Project); setPortfolio(!portfolio) }}>
                                <div className="img-div">
                                    <img src="./portfolio.png" alt="" />
                                </div>
                                <h1>Portfolio Website</h1>
                                <p>Next.js, CSS, TypeScript, React.Js, EmailJS</p>
                            </div>

                            <div className="project-box"
                                onClick={() => { setProject(!Project); setPianoTiles(!pianoTiles) }}>
                                <div className="img-div">
                                    <img src="./piano-tiles.png" alt="" />
                                </div>
                                <h1>Piano tiles</h1>
                                <p>HTML, CSS, JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="project-explore">
                    <Button className="backbtn" onClick={parameters} variant="outlined"><ArrowBackIcon style={{ marginRight: 4 }} /> Back</Button>
                    {YtBookmark && <YTBookmark />}
                </div>
            )}
        </>
    );
}