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
            {about && (<div className="about">
              Cows hold a unique and prominent place in various cultures and societies across the world, symbolizing a range of values from economic prosperity to religious sanctity. This essay explores the multifaceted significance of cows, focusing on their economic, cultural, and religious roles, and examines how these roles have shaped human societies throughout history.

Economic Importance
Cows have been integral to agriculture for millennia, serving as a cornerstone of agricultural economies. In many rural areas, cows are a primary source of livelihood. They provide milk, which is a staple in many diets and can be processed into other dairy products like cheese, butter, and yogurt. This milk production is a significant economic activity, supporting millions of farmers worldwide.

In addition to dairy, cows are valued for their meat and hides. Beef is a major source of protein in many diets, and the leather industry relies heavily on cowhide for producing a wide array of goods, from clothing to furniture. Moreover, in many traditional farming communities, cows are used as draft animals, plowing fields and transporting goods, thus playing a critical role in the agricultural process.

Cow dung, often overlooked, is another valuable resource. It is used as a natural fertilizer, enriching the soil with essential nutrients and enhancing crop yields. In many developing countries, dried cow dung serves as an important fuel source for cooking and heating, illustrating the animal's utility beyond just food and labor.

Cultural Significance
Cows also occupy a significant place in the cultural practices and daily lives of many communities. In India, for example, the cow is a symbol of life and sustenance. This reverence is reflected in various festivals and rituals. During Pongal, a harvest festival in Tamil Nadu, cows are decorated and worshipped, acknowledging their role in agricultural success. Similarly, in the festival of Govardhan Puja, celebrated in North India, cows are honored as part of a broader celebration of nature's bounty.

In other parts of the world, cows are central to local customs and traditions. In Maasai culture in Kenya and Tanzania, cattle are considered a measure of wealth and social status. The Maasai's deep connection to their cattle is evident in their rituals, songs, and daily practices. This bond underscores the animal's importance not just as a resource but as a key element of social identity and cohesion.

Religious Symbolism
The cow's religious significance is most pronounced in Hinduism, where it is revered as a sacred animal. The reverence for cows is rooted in ancient Hindu scriptures, where they are associated with deities and are seen as embodiments of virtues like non-violence and motherhood. The cow is often associated with Kamadhenu, a mythical cow that grants all desires, symbolizing abundance and generosity. This sacred status has profound implications, influencing dietary practices, agricultural methods, and even legal frameworks aimed at protecting the animal.

In contrast, in other religions, cows hold different symbolic meanings. In ancient Egyptian mythology, the goddess Hathor, depicted as a cow or a woman with cow horns, symbolized fertility, motherhood, and the nurturing aspects of nature. In Norse mythology, the primeval cow Audhumla plays a crucial role in the creation myths, nourishing the first beings with her milk.

Contemporary Issues
In modern times, the role of cows continues to evolve, reflecting broader societal changes. The industrialization of agriculture has led to the rise of factory farming, raising ethical concerns about animal welfare. This has sparked movements advocating for more humane treatment of cows and a push towards sustainable farming practices.

Furthermore, the environmental impact of large-scale cattle farming has come under scrutiny. Methane emissions from cows contribute significantly to greenhouse gas levels, prompting discussions on how to balance agricultural needs with environmental sustainability. Innovations in agricultural technology and a growing interest in plant-based diets are part of the ongoing efforts to address these challenges.

Conclusion
The cow's significance in human societies is profound and multi-dimensional, encompassing economic, cultural, and religious aspects. From being a source of sustenance and economic stability to a symbol of sacredness and cultural identity, cows have shaped human civilization in numerous ways. Understanding this deep-rooted connection offers insights into the diverse ways in which humans relate to the natural world and underscores the need for thoughtful stewardship of these valuable creatures in an ever-changing global landscape.
            </div>)}
            {resume && (<div className="resume">Resume</div>)}
            {projects && (<div className="projects">Projects</div>)}
            {contact && (<div className="contact">Contact</div>)}
          </div>
        </div>
      </div>
    </main>
  );
}
