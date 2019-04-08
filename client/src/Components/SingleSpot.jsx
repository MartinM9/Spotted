import React, {Component} from 'react';
import axios from 'axios';
import Loader from './Loader';
import history from '../history';
import Rating from 'react-rating';
import Comment from './Comment';


class SingleSpot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spot: null,
            isLoading: true,
            ratings: [],
            comment: '',
            allComments: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.getSpotData(id)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.comment.length > 0) {
            this.getSpotData(this.props.match.params.id)
        }
    }

    getSpotData = (id) =>{
        axios({
            url: `${process.env.REACT_APP_baserUrl}/single-spot/${id}`,
            method: 'get',
            withCredentials: true
        })
        .then(response => {
            this.setState({spot:response.data, isLoading:false, ratings: response.data.ratings, allComments: response.data.comments})
        })
        .catch(err => {
            console.log(err)
        })
    }

    deleteHandler = () => {
        axios({
            url: `${process.env.REACT_APP_baserUrl}/single-spot/${this.props.match.params.id}/delete`,
            method: 'post',
            withCredentials: true
        })
        .then(response => {
        })
        .catch(err => {
            console.log(err)
        })
        history.push('/all-spots')
    }

    linkToMySpots = () => {
        history.push(`/profile/${this.state.spot.author._id}/spots`)
    }

    ratingHandler = e => {
        axios({
            url: `${process.env.REACT_APP_baserUrl}/single-spot/${this.props.match.params.id}`,
            method: 'post',
            data: {star: e},
            withCredentials: true
        })
        .then(response => {
            if(response.data != null) {
                this.setState({
                    ratings: response.data.ratings
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    averageRating = () => {
        const {ratings} = this.state
        
        let ratingsSum = ratings.reduce((total, num) => {
            return total + num;
        })
        let ratingsLength = ratings.length

        return ratingsSum / ratingsLength
    }

    handleComment = e => {
        this.setState({
            comment: e.target.value
        })
    }   

    submitComment = e => {
        e.preventDefault();
        axios({
            url: `${process.env.REACT_APP_baserUrl}/single-spot/${this.props.match.params.id}/comment`,
            method: 'post',
            data: {comment: this.state.comment},
            withCredentials:  true
        })
        .then(response => {
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        let spot = this.state.spot
        const allComments = this.state.allComments.map(comment => {            
            return (
                <div className="all-comments-div" key={comment._id}>
                    <Comment
                        comment={comment}
                    />
                </div>
            )
        })

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
                                    <p>Spotted by: <span className="spotter-name" onClick={this.linkToMySpots}>{spot.author.username}</span></p>
                                </div>
                                {spot.author._id === this.props.user._id && <button className="delete-button" onClick={this.deleteHandler}>delete this spot</button>}
                                <div className="rating-div">
                                    <Rating
                                      initialRating={this.state.ratings.length > 0 && this.averageRating()}
                                      emptySymbol="fa fa-star-o fa-2x gold"
                                      fullSymbol="fa fa-star fa-2x gold"
                                      onClick={this.ratingHandler}
                                    />
                                    
                                </div>
                            </div>
                            <div className="single-spot-container-spot-comment-section">
                                <form className="comment-form" onSubmit={this.submitComment}>
                                    <input className="comment-input" onChange={this.handleComment} type="text" placeholder="Your thoughts..." name="comment" value={this.state.comment} />
                                    <button className="comment-button" type="submit">Post the comment</button>
                                </form>
                                {allComments}
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