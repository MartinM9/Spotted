import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../Style/logo_transparent.png';

class NavUnauth extends Component {

        hamburger = React.createRef();
        menu = React.createRef()

    myFunction = () => {
          this.hamburger.current.classList.toggle("change");
          this.menu.current.classList.toggle("show");
    }

    render() {

        return(
            <nav className="navbar">
                <div className="logo-div">
                    <Link to="/"><img src={logo} alt="Logo Spotted"/></Link>
                </div>
                <div>
                    <ul className="navbar-menu">
                        {/* <li><Link className="anchor" to="/all-spots">All spots</Link></li> */}
                        <li><Link className="anchor" to="/sign-up">Sign up</Link></li>
                        <li><Link className="anchor" to="/log-in">Log in</Link></li>
                    </ul>
                    <div ref={this.hamburger} id="hamburger" onClick={this.myFunction}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <ul className="nav-ul-menu" id="menu" ref={this.menu}>
                        {/* <li><Link className="anchor" to="/all-spots">All spots</Link></li> */}
                        <li><Link className="anchor" to="/sign-up">Sign up</Link></li>
                        <li><Link className="anchor" to="/log-in">Log in</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavUnauth;