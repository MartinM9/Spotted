import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../Style/logo_transparent.png';

class NavUnauth extends Component {



    render() {
        return(
            <nav className="navbar">
                <div className="logo-div">
                    <Link to="/"><img src={logo} alt="Logo Spotted"/></Link>
                </div>
                <div>
                    <ul className="navbar-menu">
                        <li><Link className="anchor" to="/all-spots">All spots</Link></li>
                        <li><Link className="anchor" to="/sign-up">Sign up</Link></li>
                        <li><Link className="anchor" to="/log-in">Log in</Link></li>
                    </ul>
                </div>
                
            </nav>
        )
    }
}

export default NavUnauth;