import React, {Component} from 'react';
import axios from 'axios';
import Loader from './Loader';
import Spot from './Spot';
import history from '../history';

class UserSpots extends Component {

    state = {
        user: null,
        isLoading: true,
        loggedIn: false
    }

    componentDidMount() {
        axios({
            url: `${process.env.REACT_APP_baserUrl}/profile/${this.props.match.params.id}/spots`,
            method: 'get',
            withCredentials: true
        })
        .then(response => {
            this.setState({user: response.data, isLoading: false, loggedIn: this.props.loggedIn })
        })
        .catch(err => {
            console.log(err)
        })
    }

    showSingleSpot = (e, id) => {
        history.push(`/single-spot/${id}`)
    }   

    render() {

        let userSpots = null;
        if (this.state.user){
             userSpots =  this.state.user.spots.map(spot => {
                return(
                    <div className="all-spots-container-spot">
                        <Spot
                            spot={spot}
                            showSingleSpot={this.showSingleSpot}
                            loggedIn={this.state.loggedIn}
                        />
                    </div>
                )
            })


        }
        
        return(
            <>
                {this.state.isLoading && <Loader />}
                <section className="content">
                {this.state.user && <div className="heading-user-spots">All spots by {this.state.user.username}</div>}
                    <div className="all-spots-container">
                        {this.state.user && userSpots}
                    </div>
                </section>
            </>
        )
    }
}

export default UserSpots;