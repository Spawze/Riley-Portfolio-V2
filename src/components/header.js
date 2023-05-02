import React, { Component } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

class Header extends Component {

    componentDidMount(){
        console.log('test')
         document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            
            var instances = M.Sidenav.init(elems, {});  
            console.log(instances)
          });
    }
    render() {
        const name = 'Riley'
        return (
            <>
            <nav>
            <div className="nav-wrapper green">
              <a href="#!" className="brand-logo">{name}</a>
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
              </ul>
            </div>
          </nav>
        
          <ul className="sidenav" id="slide-out">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
          </>
        )
    }
}



export default Header;