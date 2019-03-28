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
                    <div className="profile-image-div">
                        <h1>What have you spotted today {this.props.user.username}?</h1>
                        <div className="profile-buttons-div">
                            <button className="submit-btn-profile" onClick={this.linkToShare}>Share your spot!</button>
                            <button className="submit-btn-profile" onClick={this.linkToMySpots} user={this.props.user}>My spots</button>
                            <button className="submit-btn-profile" onClick={this.linkToEdit}>Edit your profile</button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Profile;