import React, {Component} from 'react'
import Spot from './Spot'
import axios from 'axios';
import Loader from './Loader';
import history from '../history';


export default class AllSpots extends Component {

    state = {
        allSpots : [],
        isLoading:true
    }

    componentDidMount() {
        //axios
        axios({
            url: 'http://localhost:5000/all-spots',
            method: 'get',
            withCredentials: true
        })
        .then(response => {
            console.log(response);
            this.setState({allSpots:response.data, isLoading:false})
        })
        .catch(err => {
            console.log(err)
        })
    }

    showSingleSpot = (e, id) => {
        console.log(id)
        history.push(`/single-spot/${id}`)
    }   

    render() {

        const allSpots = this.state.allSpots.map(spot => {
            return (
                <div onClick={e => this.showSingleSpot(e, spot._id)} >
                    <Spot
                        spot={spot}
                    />
                </div>
            )
        })

        return(
            <>
                {this.state.isLoading && <Loader />}
                {this.state.allSpots.length > 0 && allSpots}
            </>
        )

    }
}