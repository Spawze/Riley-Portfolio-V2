import React from "react";
import { BsGithub, BsLinkedin , BsStackOverflow} from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className="page-footer green darken-3">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h5>Made by Riley! {"<"}3</h5>
                    </div>
                    <div>
                        <a className="s1 col"href="https://github.com/Spawze"><BsGithub className="black-text" size={75} /></a>
                        <a className="s1 col"href="https://www.linkedin.com/in/riley-allred-268993275/"><BsLinkedin className="black-text" size={75} /></a>
                        <a className="s1 col"href="https://stackoverflow.com/users/20565411/spawze"><BsStackOverflow className="black-text" size={75} /></a>
                    </div>
                </div>
            </div>
        </footer>

    )
}