import React, {Component} from 'react';
import axios from 'axios';
import Spot from './Spot'
import Loader from './Loader'


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

    render() {

        return(
            <>
             {this.state.isLoading && <Loader />}
             <section className="content">
                {this.state.spot && <Spot spot={this.state.spot} />}
             </section>
            </>
        )
    }
}

export default SingleSpot;