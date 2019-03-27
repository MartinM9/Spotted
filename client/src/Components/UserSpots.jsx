import React, {Component} from 'react';
import axios from 'axios';
import Loader from './Loader';
import Spot from './Spot';
import history from '../history';

class UserSpots extends Component {

    state = {
        user: null,
        isLoading: true
    }

    componentDidMount() {
        axios({
            url: `http://localhost:5000/profile/${this.props.match.params.id}/spots`,
            method: 'get',
            withCredentials: true
        })
        .then(response => {
            console.log(response)
            this.setState({user: response.data, isLoading: false})
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
                        />
                    </div>
                )
            })


        }
        
        return(
            <>
                {this.state.isLoading && <Loader />}
                <section className="content">
                    <div className="all-spots-container">
                        {this.state.user && userSpots}
                    </div>
                </section>
            </>
        )
    }
}

export default UserSpots;