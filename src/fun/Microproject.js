import React from 'react';

function Microproject(props) {
  return (
    <a className="Fun-example" href={props.link} target="_blank" rel="noopener noreferrer">
      <img src={ props.picture } alt={ props.placeholder } className="Fun-img"></img>
      <div className="Fun-text"><p>{ props.info }</p></div>
    </a>
  );
}

export default Microproject;