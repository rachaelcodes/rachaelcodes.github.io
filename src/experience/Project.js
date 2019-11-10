import React from 'react'

function Project(props) {
  return (
    <a className="Project" href={props.link} target="_blank" rel="noopener noreferrer">
      <div className="Project-overview">
        <img className="Project-overview-img" src={ props.picture } alt={ props.placeholder } ></img>
        <p className="Project-overview-text">{ props.overview }</p>
      </div>
      <div className="Project-detail">
        <div className="Project-detail-text">{props.detail} with <div className="Project-detail-emphasis"><p>{ props.tech[0] }</p></div> and <div className="Project-detail-emphasis"><p>{ props.tech[1] }</p></div></div>
      </div>
    </a>
  );
}

export default Project;