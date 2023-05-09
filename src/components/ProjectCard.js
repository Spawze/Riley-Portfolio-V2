import React from "react";

export default function ProjectCard(props) {
  return (
    <>
      {props.projects.map(item => (
        <div className="col s12 m12 l6" key={item.key}>
          <div className="card large grey darken-1 sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" alt="" src={item.image} />
            </div>
            <div className="card-content">
              <span className="card-title activator white-text">{item.name}<i className="material-icons right">more_vert</i></span>
              <div className="row">
                <p className="col"><a className ="light-blue-text text-lighten-4" href={""+item.url}>View Project Here!</a></p>
                <p className="col"><a className ="light-blue-text text-lighten-4" href={""+item.github}>View Repository Here!</a></p>
              </div>
            </div>
            <div className="card-reveal grey">
              <span className="card-title white-text">{item.name}<i className="material-icons right">close</i></span>
              <p className="flow-text">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}