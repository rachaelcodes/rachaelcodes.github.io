import React from 'react';
import './Heading.css';

function Heading() {
  return (
    <header className="Heading">
        <h1>Hi! I'm <span>Rachael Robinson</span>,</h1>
        <p>a Web developer and education enthusiast, based in London.</p>
        {/* <div className="contact">
          add links here
        </div> */}
      </header>
  )
}

export default Heading;