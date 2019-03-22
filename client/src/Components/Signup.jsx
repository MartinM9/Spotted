import React, {Component} from 'react';

class Signup extends Component {



    render() {
        return(
            <>
                <section className="content">
                    <div className="signup-image-div">
                        <h1>Join the family!</h1>
                        <div className="form-container">
                            <form>
                                <input className="form-input" placeholder="Username" type="text" name="username" />
                                <input className="form-input" placeholder="First name" type="text" name="firstname" />
                                <input className="form-input" placeholder="Last name" type="text" name="lastname" />
                                <input className="form-input" placeholder="Email" type="email" name="email"  />
                                <input className="form-input" placeholder="Password" type="password" name="password" />
                                <input className="form-input" placeholder="Car I drive" type="text" name="car" />
                                <input className="form-input" placeholder="Camera/Smartphone I use" type="text" name="camera" />
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