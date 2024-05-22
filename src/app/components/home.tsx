"use client";
import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Image from "next/image";
import "./home.css";

import Contact from "./Contact";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";

export default function MainPage() {
  
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const aboutbtn = () => {
    setAbout(true);
    setResume(false);
    setProjects(false);
    setContact(false);

  }

  const resumebtn = () => {
    setAbout(false);
    setResume(true);
    setProjects(false);
    setContact(false);
  }

  const projectsbtn = () => {
    setAbout(false);
    setResume(false);
    setProjects(true);
    setContact(false);
  }

  const contactbtn = () => {
    setAbout(false);
    setResume(false);
    setProjects(false);
    setContact(true);
  }

  return (
    <main className="main">
      <div className="left-main">
        <div className="left-mask"></div>
        <div className="subLeft-main">
          <div className="Image">
            <Image
              src="/my-avatar.png"
              alt="My Avatar"
              width={150}
              height={200}
            />
          </div>

          <div className="userInfo">
            <h1>Pankaj Kumar</h1>
            <p> Web Developer</p>
          </div>

          <div className="details">
            <div className="email details-div">
              <EmailOutlinedIcon className="detail-icon" />
              <div className="subdetails">
                <p>Email</p>
                <h5>pankaj2sarawag@gmail.com</h5>
              </div>
            </div>
            <div className="phone details-div">
              <PhoneAndroidOutlinedIcon className="detail-icon" />
              <div className="subdetails">
                <p>Phone</p>
                <h5>+91 9529541243</h5>
              </div>
            </div>

            <div className="location details-div">
              <FmdGoodOutlinedIcon className="detail-icon" />
              <div className="subdetails">
                <p>Location</p>
                <h5>Jhunjhunu, Rajasthan, India</h5>
              </div>
            </div>
          </div>

          <button className="small-screen-btn"
          onClick={() => setSmallScreen(!smallScreen)}
          >
            {smallScreen ? <MenuOpenIcon /> : <MenuIcon />}
          </button>

          {smallScreen ? (
            <div className="small-screen-left">
              <div className="sm-details">
                <div className="sm-email sm-details-div">
                  <EmailOutlinedIcon className="detail-icon" />
                  <div className="sm-subdetails">
                    <p>Email</p>
                    <h5>pankaj2sarawag@gmail.com</h5>
                  </div>
                </div>
                <div className="sm-phone sm-details-div">
                  <PhoneAndroidOutlinedIcon className="detail-icon" />
                  <div className="sm-subdetails">
                    <p>Phone</p>
                    <h5>+91 9529541243</h5>
                  </div>
                </div>
    
                <div className="sm-location sm-details-div">
                  <FmdGoodOutlinedIcon className="detail-icon" />
                  <div className="sm-subdetails">
                    <p>Location</p>
                    <h5>Jhunjhunu, Rajasthan, India</h5>
                  </div>
                </div>
              </div>
              <span className="sm-socials">
              <a href="https://www.linkedin.com/in/pankaj-kumar-b7362722a/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="social-icon" /> LinkedIn
              </a>

              <a href="https://github.com/Pankajsarawag" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="social-icon" /> GitHub
              </a>
              </span>

              <span className="smm-socials">
              <a href="https://www.linkedin.com/in/pankaj-kumar-b7362722a/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{fontSize:30}} />
              </a>

              <a href="https://github.com/Pankajsarawag" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{fontSize:30}} />  
              </a>
              </span>
            </div>
          ):(
           <div className="small-screen-userInfo">
                <div className="sm-Image">
                <Image
                  src="/my-avatar.png"
                  alt="My Avatar"
                  width={150}
                  height={200}
                />
              </div>

              <div className="sm-userInfo">
                <h1>Pankaj Kumar</h1>
                <p> Web Developer</p>
              </div>

           </div>
          )}

          <span className="socials">
            <a href="https://www.linkedin.com/in/pankaj-kumar-b7362722a/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="social-icon" /> LinkedIn
            </a>

            <a href="https://github.com/Pankajsarawag" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="social-icon" /> GitHub
            </a>
          </span>
        </div>
      </div>

      <div className="right-main">
        <div className="right-mask"></div>
        <div className="subRight-main">
          <div className="header">
            {about && <h1>About</h1>}
            {resume && <h1>Resume</h1>}
            {projects && <h1>Projects</h1>}
            {contact && <h1>Contact</h1>}
            <div className="header-details">
              {about ? (
                <h2 className="btn-active" onClick={aboutbtn}>About</h2>
              ) : (
                <h2 className="btn-normal" onClick={aboutbtn}>About</h2>
              )}
              {resume ? (
                <h2 className="btn-active" onClick={resumebtn}>Resume</h2>
              ) : (
                <h2 className="btn-normal" onClick={resumebtn}>Resume</h2>
              )}
              {projects ? (
                <h2 className="btn-active" onClick={projectsbtn}>Projects</h2>
              ) : (
                <h2 className="btn-normal" onClick={projectsbtn}>Projects</h2>
              )}
              {contact ? (
                <h2 className="btn-active" onClick={contactbtn}>Contact</h2>
              ) : (
                <h2 className="btn-normal" onClick={contactbtn}>Contact</h2>
              )}
            </div>
          </div>

          <div className="content">
            {about && (<About/>)}
            {resume && (<Resume/>)}
            {projects && (<Projects/>)}
            {contact && (<Contact />)}
          </div>
        </div>
      </div>
    </main>
  );
}
