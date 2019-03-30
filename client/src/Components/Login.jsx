import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {

    state = {
        username: '',
        password: '',
        errMessage: ''
    }

    handleChange = e => {
        let updateUser = {};
        updateUser[e.target.name] = e.target.value;
        this.setState(updateUser);
    }

    handleSubmit = e => {
        e.preventDefault();
        axios({
            url: `${process.env.REACT_APP_baserUrl}/log-in`,
            method: 'post',
            data: this.state,
            withCredentials: true
        })
        .then(response => {
            console.log(response);
            this.props.haveLoggedIn(true, response.data.user);
            this.props.history.push('/profile')
        })
        .catch(err => {
            console.log(err)
            this.setState({
                errMessage: err.response.data.errorMessage
            })
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
                                <input onChange={this.handleChange} className="form-input" placeholder="Username" type="text" name="username" value={this.state.username} />
                                <input onChange={this.handleChange} className="form-input" placeholder="Password" type="password" name="password" value={this.state.password} />
                                <input className="submit-btn" type="submit" value="log in" />
                                {this.state.errMessage && <p className="error-message">{this.state.errMessage}</p>}
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Login