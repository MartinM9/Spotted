import React, {Component} from 'react';

class Login extends Component {


    
    render() {
        return(
            <>
                <section className="content">
                    <div className="login-image-div">
                        <h1>Log in</h1>
                        <div className="form-container">
                            <form>
                                <input className="form-input" placeholder="Username" type="text" name="username" />
                                <input className="form-input" placeholder="Password" type="password" name="password" />
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