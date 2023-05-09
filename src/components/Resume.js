import React from "react";
import { Link } from "react-router-dom";

export default function Resume() {
    return (
        <div className="container">
            <h1 className="col s12">My Resume</h1>
            <p className="col">Download my resume <Link to="/Resume.pdf" target="_blank" download>here</Link></p>

            <div className="row">
                <h3 className="">Front-end Skills</h3>
                <ul className="col s12 flow-text">
                    <li>- HTML</li>
                    <li>- CSS</li>
                    <li>- JavaScript</li>
                    <li>- APIs</li>
                    <li>- React (This portfolio was built with React!)</li>
                </ul>
                <h3 className="">Back-end Skills</h3>
                <ul className="col s12 flow-text">
                    <li>- MERN Stack</li>
                    <li>- NodeJS</li>
                    <li>- Object Oriented Programming</li>
                    <li>- SQL Database</li>
                    <li>- Object Relational Mapping</li>
                    <li>- Model View Controller Paradigm</li>
                    <li>- MongoDB and Mongoose</li>
                    <li>- Progressive Web Apps</li>
                </ul>
            </div>
        </div>
    )
}