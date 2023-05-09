import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
                        <Link to="/Riley-Portfolio-V2/" className="brand-logo ">Riley </Link>
                    
                    <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li className={useLocation().pathname==='/Riley-Portfolio-V2/'?'active':''}><Link to="/Riley-Portfolio-V2/">About Me</Link></li>
                        <li className={useLocation().pathname==='/Riley-Portfolio-V2/portfolio'?'active':''}><Link to="/Riley-Portfolio-V2/portfolio">Portfolio</Link></li>
                        <li className={useLocation().pathname==='/Riley-Portfolio-V2/contact'?'active':''}><Link to="/Riley-Portfolio-V2/contact">Contact</Link></li>
                        <li className={useLocation().pathname==='/Riley-Portfolio-V2/resume'?'active':''}><Link to="/Riley-Portfolio-V2/resume">Resume</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>

            <ul className="sidenav grey darken-3" id="slide-out">
                <li><Link className="white-text" to="/Riley-Portfolio-V2/">About Me</Link></li>
                <li><Link className="white-text" to="/Riley-Portfolio-V2/portfolio">Portfolio</Link></li>
                <li><Link className="white-text" to="/Riley-Portfolio-V2/contact">Contact</Link></li>
                <li><Link className="white-text" to="/Riley-Portfolio-V2/resume">Resume</Link></li>
            </ul>
        </header>
    )
}
