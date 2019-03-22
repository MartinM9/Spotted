import React, {Component} from 'react';
import axios from 'axios';

class Signup extends Component {

    state = {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
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
            url: 'http://localhost:5000/sign-up',
            method: 'post',
            data: this.state,
            withCredentials: true
        })
        .then(response => {
            console.log(response)
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
                        <h1>Join the family!</h1>
                        <div className="form-container">
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={this.handleChange} className="form-input" placeholder="Username" type="text" name="username" value={this.state.username} />
                                <input onChange={this.handleChange} className="form-input" placeholder="First name" type="text" name="firstname" value={this.state.firstname} />
                                <input onChange={this.handleChange} className="form-input" placeholder="Last name" type="text" name="lastname" value={this.state.lastname} />
                                <input onChange={this.handleChange} className="form-input" placeholder="Email" type="email" name="email" value={this.state.email} />
                                <input onChange={this.handleChange} className="form-input" placeholder="Password" type="password" name="password" value={this.state.password} />
                                <input onChange={this.handleChange} className="form-input" placeholder="Car I drive" type="text" name="car" value={this.state.car} />
                                <input onChange={this.handleChange} className="form-input" placeholder="Camera/Smartphone I use" type="text" name="camera" value={this.state.camera} />
                                <input className="submit-btn" type="submit" value="sign up" />
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Signup;