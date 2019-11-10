import React, {Component} from 'react';
import Heading from './heading/Heading.js';
import Experience from './experience/Experience.js';
import Fun from './fun/Fun.js';
import Contact from './contact/Contact.js';

import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';
import './App.css';

class App extends Component  {
  constructor(){
    console.log('%cHello there! 👋 Check out more of my code at github.com/rachaelcodes', 'background: mediumspringgreen;')
    super();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    this.state = {
      positions: this.setPositions(this.width, this.height)
    };
  }

  setPositions(width, height) {
    let positions = [];

    for (var i = 0; i < 125; i ++) {
      let pos = [];
      pos.push(Math.floor(Math.random() * width));
      pos.push(Math.floor(Math.random() * height));

      positions.push(pos);
    }

    return positions;
  }

  
  updateDimensions() {
    this.setState(
      {
        positions: this.setPositions(window.innerWidth, window.innerHeight)
      }
    )
  };

  
  componentDidMount(){
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div className="App">
        <div className="App-contents">
          <Heading />
          <Experience />
          <Fun />
          <Contact />
          <div className="App-credits">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
        
        <div className="P5">
          <P5Wrapper sketch={sketch} positions={this.state.positions}></P5Wrapper>
        </div>
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700&display=swap" rel="stylesheet"></link>
      </div>
    );
  }

}

export default App;
