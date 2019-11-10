import React from 'react';
import Microproject from './Microproject.js';
import './Fun.css';

const projects = [
  {
    picture: "./projects/game.png",
    placeholder: "game screenshot",
    info: "Tiny Rocket Game",
    link: "https://codepen.io/rachaelcodes/pen/pozdZdq",
  }, {
    picture: "./projects/planet.png",
    placeholder: "generated planet",
    info: "Planet Generator",
    link: "https://codepen.io/rachaelcodes/pen/WqgZzW",
  }, {
    picture: "./projects/connect4.png",
    placeholder: "connect 4 game",
    info: "React Connect 4",
    link: "https://github.com/rachaelcodes/connect4",
  }, {
    picture: "./projects/graph.png",
    placeholder: "graph section",
    info: "Semiotic.js Lunch and Learn",
    link: "https://codesandbox.io/s/8y3rnl3830",
  }, {
    picture: "./projects/svgproject.png",
    placeholder: "svg filter examples",
    info: "SVG filter experiments",
    link: "https://codepen.io/rachaelcodes/pen/eXBVrM",
  },
]

function Fun() {
  const projectList = projects.map((project, index) =>
    <Microproject 
      picture = {project.picture}
      placeholder = {project.placeholder}
      info = {project.info}
      link = {project.link}
      key = {index}
    />
  );

  return (
    <section className="Fun">
      <h2>Ask me about my micro-projects</h2>
      <div className="Fun-list">
        { projectList }
      </div>
    </section>
  )
}


export default Fun;