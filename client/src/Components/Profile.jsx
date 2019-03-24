import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component {



    render() {
        return(
            <>
                <section className="content">
                    <h1>What have you spotted today {this.props.user.username}?</h1>
                    <Link to="/create-spot">Share your spot!</Link>
                </section>
            </>
        )
    }
}

export default Profile;