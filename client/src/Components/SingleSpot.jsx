import React, {Component} from 'react';
import axios from 'axios';
import Loader from './Loader';
import history from '../history';


class SingleSpot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spot: null,
            isLoading:true
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.getSpotData(id)
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.getSpotData(this.props.match.params.id)
        }
    }

    getSpotData = (id) =>{
        axios({
            url: `http://localhost:5000/single-spot/${id}`,
            method: 'get',
            withCredentials: true
        })
        .then(response => {
            console.log(response)
            this.setState({spot:response.data, isLoading:false})
        })
        .catch(err => {
            console.log(err)
        })
    }

    deleteHandler = () => {
        axios({
            url: `http://localhost:5000/single-spot/${this.props.match.params.id}`,
            method: 'post',
            withCredentials: true
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
        history.push('/all-spots')
    }

    linkToMySpots = () => {
        history.push(`/profile/${this.state.spot.author._id}/spots`)
    }

    render() {
        let spot = this.state.spot

        return(
            <>
             {this.state.isLoading && <Loader />}
             {spot &&  
                <section className="content">
                    <div className="single-spot-container">
                        <div className="line-div">
                            <div className="h1-div">{spot.car} {spot.type}</div>
                            <div className="line"></div>
                            <p>{spot.engine}, {spot.horsepower} HP </p>
                        </div>
                        <div className="single-spot-container-spot"> 
                            <div className="single-spot-container-spot-img-div">
                                <img src={spot.image} alt="Car" />
                            </div>
                            <div className="single-spot-container-spot-author-rating-wrapper">
                                <div className="single-spot-container-spot-author-div">
                                    <p>Spotted by: <span onClick={this.linkToMySpots}>{spot.author.username}</span></p>
                                </div>
                                <div>
                                    <p>Ratings</p>
                                    {spot.author._id === this.props.user._id && <button onClick={this.deleteHandler}>delete</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
            }
            </>
        )
    }
}

export default SingleSpot;