import './About.css';
import CodeIcon from '@mui/icons-material/Code';
export default function About() {
    return (
        <>
            <div style={{ color: "gray-700", fontSize: "1rem", marginBottom: "2rem" }}>
                I’m Pankaj Kumar, a passionate Fullsack developer with a keen eye for design and functionality. As a student eager to leave a mark in the world of web development, I dedicate myself to creating websites that are not just operational, but also aesthetically appealing and user-centric.
            </div>
            <h1 style={{ fontWeight: 800, fontSize: "2rem", margin: "1rem 0rem" }}>What I'm Doing</h1>
            <div className="skills-main">
                <div className="skills">
                    <div className="ui-ux skill-box">
                        <img src="/ui.png" alt="ui" />
                        <div className="skill-discription">
                            <h1>Web Design</h1>
                            <p>The most modern and high-quality design made at a professional level.</p>
                        </div>
                    </div>
                    <div className="webdev skill-box">
                        <img src="/webDev.png" alt="webDev" />
                        <div className="skill-discription">
                            <h1>Web Development</h1>
                            <p>Developing responsive and dynamic websites using the latest technologies</p>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <div className="research skill-box">
                        <img src="/Research.png" alt="Research" />
                        <div className="skill-discription">
                            <h1>Research & Testing</h1>
                            <p>Understanding user needs, preferences, and behaviors through research and testing</p>
                        </div>
                    </div>
                    <div className="photograph skill-box">
                        <img src="/photograph.png" alt="photograph" />
                        <div className="skill-discription">
                            <h1>Photography</h1>
                            <p>Capturing high-quality images that complement and elevate web design projects, enhancing visual storytelling.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 style={{ fontWeight: 800, fontSize: "2rem", margin: "1rem 0rem" }}>Technologies</h1>
            <div className='technology'>
                <div className="tech-details">
                    <img src="/html.png" alt="html" />
                    <h1>HTML</h1>
                </div>

                <div className="tech-details">
                    <img src="/css-3.png" alt="css" />
                    <h1>CSS</h1>
                </div>

                <div className="tech-details">
                    <img src="/java-script.png" alt="java-scrip" />
                    <h1>JavaScript</h1>
                </div>

                <div className="tech-details">
                    <img src="/react.png" alt="react" />
                    <h1>React Js</h1>
                </div>

                <div className="tech-details">
                    <img src="/nextjs.png" alt="nextjs" />
                    <h1>Next Js</h1>
                </div>

                <div className="tech-details">
                    <img src="/typescript.png" alt="typescript" />
                    <h1>TypeScript</h1>
                </div>

                <div className="tech-details">
                    <img src="/express.png" alt="express" />
                    <h1>Express Js</h1>
                </div>

                <div className="tech-details">
                    <img src="/node.png" alt="node" />
                    <h1>node Js</h1>
                </div>

                <div className="tech-details">
                    <img src="/mongobd.png" alt="mongodb" />
                    <h1>mongoDB</h1>
                </div>

                <div className="tech-details">
                    <img src="/sql-server.png" alt="sql" />
                    <h1>SQL</h1>
                </div>

                <div className="tech-details">
                    <img src="/git.png" alt="git" />
                    <h1>Git Bash</h1>
                </div>

                <div className="tech-details">
                    <img src="/github.png" alt="github" />
                    <h1>Github</h1>
                </div>

                <div className="tech-details">
                    <img src="/api.png" alt="api" />
                    <h1>API</h1>
                </div>

                <div className="tech-details">
                    <img src="/mui.png" alt="mui" />
                    <h1>Material Ui</h1>
                </div>

                <div className="tech-details">
                    <img src="/bootstrap.png" alt="bootstrap" />
                    <h1>Bootstrap</h1>
                </div>

                <div className="tech-details">
                    <img src="/arduino.png" alt="arduino" />
                    <h1>Arduino</h1>
                </div>

                <div className="tech-details">
                    <img src="/matlab.png" alt="matlab" />
                    <h1>MATLAB</h1>
                </div>
            </div>
        </>
    )
}