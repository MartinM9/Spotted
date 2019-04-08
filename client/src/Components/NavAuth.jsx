import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../Style/logo_transparent.png';
import axios from 'axios';

class NavAuth extends Component {

    hamburger = React.createRef();
    menu = React.createRef()

    hamburgerHandler = () => {
        this.hamburger.current.classList.toggle("change");
        this.menu.current.classList.toggle("show");
    }

    handleLogOut = () => {
        localStorage.clear();
        axios({
            url: `${process.env.REACT_APP_baserUrl}/log-out`,
            method: 'get',
            withCredentials: true
        })
        .then(response => {
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
                    <div ref={this.hamburger} id="hamburger" onClick={this.hamburgerHandler}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <ul className="nav-ul-menu" id="menu" ref={this.menu}>
                        <li><Link className="anchor" to="/all-spots">All spots</Link></li>
                        <li><Link className="anchor" to="/profile">Profile</Link></li>
                        <li><a href="/" onClick={this.handleLogOut} className="anchor">Log out</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavAuth;