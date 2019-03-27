import React, {Component} from 'react';
import history from '../history';

class Profile extends Component {

    linkToEdit = () => {
        history.push(`/profile/edit/${this.props.user._id}`)
    }

    linkToShare = () => {
        history.push('/create-spot')
    }

    linkToMySpots = () => {
        history.push(`/profile/${this.props.user._id}/spots`)
    }

    render() {
        
        return(
            <>
                <section className="content">
                    <h1>What have you spotted today {this.props.user.username}?</h1>
                    <button onClick={this.linkToShare}>Share your spot!</button>
                    <button onClick={this.linkToEdit}>Edit your profile</button>
                    <button onClick={this.linkToMySpots} user={this.props.user}>My spots</button>
                </section>
            </>
        )
    }
}

export default Profile;