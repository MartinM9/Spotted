import React, {Component} from 'react'

class Profile extends Component {



    render() {
        return(
            <>
                <section className="content">
                    <h1>What have you spotted today {this.props.user.username}?</h1>
                </section>
            </>
        )
    }
}

export default Profile;