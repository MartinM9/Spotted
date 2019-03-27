import React, {Component} from 'react'
import Spot from './Spot'
import axios from 'axios';
import Loader from './Loader';
import history from '../history';


class AllSpots extends Component {

    state = {
        allSpots : [],
        isLoading:true,
        search: ''
    }

    componentDidMount() {
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
        history.push(`/single-spot/${id}`)
    }   

    updateSearch = e => {
        this.setState({
            search: e.target.value.substr(0, 20)
        })
    }

    render() {
        let filteredSpots = this.state.allSpots.filter(spot => {
            return spot.car.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || spot.type.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        const allSpots = filteredSpots.map(spot => {            
            return (
                <div className="all-spots-container-spot">
                    <Spot
                        spot={spot}
                        showSingleSpot={this.showSingleSpot}
                    />
                </div>
            )
        })

        return(
            <>
                {this.state.isLoading && <Loader />}
                <section className="content">
                    <input onChange={this.updateSearch} type="text" value={this.state.search} />
                    <div className="all-spots-container">
                        {this.state.allSpots.length > 0 && allSpots}
                    </div>
                </section>
            </>
        )

    }
}

export default AllSpots;