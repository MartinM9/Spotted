import React, {Component} from 'react'

class SingleSpot extends Component {



    render() {
        return(
            <>
                <section className="content">
                    <p>Car: {this.props.spot.car}</p>
                    <p>Type: </p>
                    <p>Engine: </p>
                    <p>Horsepower: </p>
                    <img src={this.props.spot.image} alt="Car image" />
                </section>
            </>
        )
    }
}

export default SingleSpot;