import React from 'react';
import Project from './Project.js';
import './Experience.css';

const projects = [
  {
    "picture": "./projects/robot.png",
    "placeholder": "BB8 image",
    "overview": "Star Wars coding kit at Kano Computing",
    "detail": "animating a robot",
    "tech": ["pixi.js", "matter.js"],
    "link": "https://kano.me/uk/store/products/star-wars-the-force-coding-kit"
  }, {
    "picture": "./projects/snowstorm.png",
    "placeholder": "snowstorm blockly image",
    "overview": "Frozen coding kit at Kano Computing",
    "detail": "generating a customisable storm",
    "tech": ["Blockly", "simplex noise"],
    "link": "https://kano.me/uk/store/products/disney-frozen-2-coding-kit"
  }, {
    "picture": "./projects/toucanbox.png",
    "placeholder": "ToucanBox logo",
    "overview": "ToucanBox subscription website",
    "detail": "improving user profile experience",
    "tech": ["Vue.js", "Ruby"],
    "link": "https://www.toucanbox.com/"
  }, {
    "picture": "./projects/seatwave.jpg",
    "placeholder": "Seatwave logo",
    "overview": "Ticket resale website",
    "detail": "building checkout components",
    "tech": ["React", "Redux"],
    "link": "https://www.ticketmaster.co.uk/"
  }
];

function Experience() {

  const projectList = projects.map((project, index) =>
    <Project 
      picture = {project.picture}
      placeholder = {project.placeholder}
      overview = {project.overview}
      detail = {project.detail}
      tech = {project.tech}
      link = {project.link}
      key = {index}
    />
  );

  return (
    <section className="Experience">
      <h2>Ask me about my experience</h2>
      <div className="Experience-contents">
        {projectList}
      </div>
    </section>
  );
}

export default Experience;

