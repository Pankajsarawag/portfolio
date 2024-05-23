import Diversity1Icon from '@mui/icons-material/Diversity2'; import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

import "./Resume.css";
export default function Resume() {
    return (
        <>
            <div className="education">
                <div className="education-left">
                    <div className="education-line"></div>
                    <SchoolIcon className="education-icon" />
                    <RadioButtonCheckedIcon className='education-point1' />
                    <RadioButtonCheckedIcon className='education-point2' />
                    <RadioButtonCheckedIcon className='education-point3' />
                </div>
                <div className="education-right">
                    <h1 className="Education-Section">Education</h1>
                    <div className="college">
                        <h1>National Institute of Technology, Tiruchirappalli, Tamil Nadu</h1>
                        <h3>2021-Present</h3>
                        <p>Bachelor of Technology in Instrumentation and Control Engineering <b> (CGPA: 8.43) </b> </p>
                    </div>

                    <div className="class-12">
                        <h1>Hind Public Senior Secondary School, Pilani, Jhunjhunu, Rajasthan</h1>
                        <h3>2019</h3>
                        <p>RBSE | Class XII <b> (Score: 83 %) </b> </p>
                    </div>

                    <div className="class-10">
                        <h1>Hind Public Senior Secondary School, Pilani, Jhunjhunu, Rajasthan</h1>
                        <h3>2017</h3>
                        <p>RBSE | Class X <b> (Score: 91.67 %) </b> </p>
                    </div>
                </div>
            </div>
            <div className="achievements">
                <div className="achievements-left">
                    <div className="achievements-line"></div>
                    <EmojiEventsIcon className="achievements-icon" />
                    <RadioButtonCheckedIcon className='achievements-point1' />
                    <RadioButtonCheckedIcon className='achievements-point2' />
                    <RadioButtonCheckedIcon className='achievements-point3' />
                </div>
                <div className="achievements-right">
                    <h1 className="Achievements-Section">Achievements</h1>
                    <div className="achievement1">
                        <h1>Winner</h1>
                        <h3>Sangam EV Case Study Competition in Pragyan’22 </h3>
                        <p>NIT Trichy, Tamil Nadu, India</p>
                    </div>

                    <div className="achievement2">
                        <h1>Winner</h1>
                        <h3> BharatX Product Case Study Competition in E-Summit’22</h3>
                        <p>NIT Trichy, Tamil Nadu, India</p>
                    </div>

                    <div className="achievement3">
                        <h1>Winner</h1>
                        <h3> BKBIET Science Quiz Competition’19 - Sponsored by IEEE</h3>
                        <p> BKBIET Pilani, Jhunjhunu, Rajasthan, India </p>
                    </div>
                </div>
            </div>
            <div className="Position-of-Responsibility">
                <div className="Por-top">
                    <Diversity1Icon className="Por-icon" />
                    <h1 className="Por-Section">Position Of Responsibility</h1>
                    <h1 className='por'>POR</h1>
                </div>
                <div className="Por-1">
                    <h1> <LooksOneIcon className='number-icon' />ICE NITT - Web Team </h1>
                    <h3>March 2023 - Present</h3>
                    <p>Involved in the design and development of the institution’s website, specifically focusing on incorporating the
                        detailed information of faculties. By organizing and presenting the faculty information in a user-friendly manner, we
                        aimed to provide visitors with easy access to relevant details, fostering a seamless browsing experience.</p>
                </div>
                <div className="Por-2">
                    <h1><LooksTwoIcon className='number-icon' />Public Relation and Publicity Head, Aayaam, NIT trichy </h1>
                    <h3>July 2023 - Present</h3>
                    <p>Managed multiple events for Aayaam a Student’s Society that aims to promote diversity of Northern India within the
                        Campus. Aayaam organizes Hindi literary competitions at inter-college and intra-college levels, promoting creativity
                        in Hindi writing and Led cultural celebrations for festivals like Holi, Hindi Diwas, Navratri, Diwali, and more.</p>
                </div>
            </div>
            <div className="skill-percent">
                <h1 style={{ fontSize: "1.8rem", fontWeight: 600, display:"flex", alignItems:"center" }}><PsychologyIcon style={{fontSize:"1.8rem", marginRight:5}}/> Skills</h1>
                <div className="skill-Section">
                    <h1 className='skill-name'> <b>HTML</b> 95%</h1>
                    <div className="html"></div>
                </div>

                <div className="skill-Section">
                    <h1 className='skill-name'> <b>CSS</b> 95%</h1>
                    <div className="css"></div>
                </div>

                <div className="skill-Section">
                    <h1 className='skill-name'> <b>JavaScript</b> 80%</h1>
                    <div className="js"></div>
                </div>

                <div className="skill-Section">
                    <h1 className='skill-name'> <b>TypeScript</b> 90%</h1>
                    <div className="Ts"></div>
                </div>

                <div className="skill-Section">
                    <h1 className='skill-name'> <b>React Js</b> 80%</h1>
                    <div className="react"></div>
                </div>

                <div className="skill-Section">
                    <h1 className='skill-name'> <b>Next Js</b> 80%</h1>
                    <div className="next"></div>
                </div>

                <div className="skill-Section">
                    <h1 className='skill-name'> <b>SQL</b> 75%</h1>
                    <div className="sql"></div>
                </div>

                <div className="skill-Section">
                    <h1 className='skill-name'> <b>Express Js</b> 70%</h1>
                    <div className="Ejs"></div>
                </div>
            </div>
        </>
    );
}