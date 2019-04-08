import React, {Component} from 'react'
import axios from 'axios';
import history from '../history'

class EditProfile extends Component {
    
    state = {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        car: '',
        camera: ''
    }

    handleChange = e => {
        let updateUser = {};
        updateUser[e.target.name] = e.target.value;
        this.setState(updateUser);
    }

    handleSubmit = e => {
        e.preventDefault();
        axios({
            url: `${process.env.REACT_APP_baserUrl}/profile/edit/${this.props.match.params.id}`,
            method: 'post',
            data: this.state,
            withCredentials: true
        })
        .then(response => {
            history.push('/profile')
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        return(
            <>
                <section className="content">
                    <div className="signup-image-div">
                        <h1>Edit profile</h1>
                        <div className="form-container">
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={this.handleChange} className="form-input" placeholder="Username" type="text" name="username" value={this.state.username} />
                                <input onChange={this.handleChange} className="form-input" placeholder="First name" type="text" name="firstname" value={this.state.firstname} />
                                <input onChange={this.handleChange} className="form-input" placeholder="Last name" type="text" name="lastname" value={this.state.lastname} />
                                <input onChange={this.handleChange} className="form-input" placeholder="Email" type="email" name="email" value={this.state.email} />
                                <input onChange={this.handleChange} className="form-input" placeholder="Car I drive" type="text" name="car" value={this.state.car} />
                                <input onChange={this.handleChange} className="form-input" placeholder="Camera/Smartphone I use" type="text" name="camera" value={this.state.camera} />
                                <input className="submit-btn" type="submit" value="edit" />
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default EditProfile;