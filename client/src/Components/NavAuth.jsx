import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../Style/logo_transparent.png';
import axios from 'axios';

class NavUnauth extends Component {

    handleLogOut = () => {
        localStorage.clear();
        axios({
            url: 'http://localhost:5000/log-out',
            method: 'get',
            withCredentials: true
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
            <nav className="navbar">
                <div className="logo-div">
                    <Link to="/"><img src={logo} alt="Logo Spotted"/></Link>
                </div>
                <div>
                    <ul className="navbar-menu">
                        <li><Link className="anchor" to="/all-spots">All spots</Link></li>
                        <li><Link className="anchor" to="/profile">Profile</Link></li>
                        <li><a href="/" onClick={this.handleLogOut} className="anchor">Log out</a></li>
                    </ul>
                </div>
                
            </nav>
        )
    }
}

export default NavUnauth;