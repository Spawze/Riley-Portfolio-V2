import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min.js";


export default function Header() {
    
    useEffect(() => {
    const sidenavEl = document.querySelectorAll('.sidenav');    
    M.Sidenav.init(sidenavEl, {});
    })
    return (
        <header>
            <nav>
                <div className="nav-wrapper green">
                    <div className="container">
                        <Link to="/" className="brand-logo ">Riley </Link>
                    
                    <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">About Me</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>

            <ul className="sidenav grey darken-3" id="slide-out">
                <li><Link className="white-text" to="/">About Me</Link></li>
                <li><Link className="white-text" to="/portfolio">Portfolio</Link></li>
                <li><Link className="white-text" to="/contact">Contact</Link></li>
                <li><Link className="white-text" to="/resume">Resume</Link></li>
            </ul>
        </header>
    )
}
