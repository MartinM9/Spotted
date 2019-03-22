import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {

    state = {
        username: '',
        password: '',
        err: ''
    }

    handleChange = e => {
        let updateUser = {};
        updateUser[e.target.name] = e.target.value;
        this.setState(updateUser);
    }

    handleSubmit = e => {
        e.preventDefault();
        axios({
            url: 'http://localhost:5000/log-in',
            method: 'post',
            data: this.state,
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
            <>
                <section className="content">
                    <div className="login-image-div">
                        <h1>Log in</h1>
                        <div className="form-container">
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={this.handleChange} className="form-input" placeholder="Username" type="text" name="username" />
                                <input onChange={this.handleChange} className="form-input" placeholder="Password" type="password" name="password" />
                                <input className="submit-btn" type="submit" value="log in" />
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Login