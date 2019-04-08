import React, {Component} from 'react';
import video from '../Style/Beach.mp4';
import logo from '../Style/logo_transparent.png';
import axios from 'axios';
import YouCar from './YouCar';

class Main extends Component {

    state = {
        youCar: []
    }

    componentDidMount = () => {
        axios({
            url: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fuser%3DYouCarPress',
            method: 'get',
            withCredentials: false
        })
        .then(result => {
            this.setState({
                youCar: [result.data.items[0], result.data.items[1], result.data.items[2]]
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {

        const youCarData = this.state.youCar.map(data => {
            return(
                <div className="news-div-mobile" key={data.guid}>
                    <YouCar data={data} />
                </div>
            )
        })

        return(
            <>
                <div className="content">
                    <div className="video-div">
                        <div className="layer"></div>
                        <div className="main-layer-content-div">
                            <img src={logo} alt=""/>
                            <p>Spot it, share it, rate it and discuss.</p>
                        </div>
                        <video muted autoPlay loop>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <main className="news-div">
                        <div className="line-div">
                            <div className="h1-div">Latest news</div>
                            <div className="line"></div>
                        </div>
                        <div className="news-div-flex-container">
                            {this.state.youCar.length > 0 && youCarData}
                        </div>
                    </main>
                </div>
            </>
        )
    }
}

export default Main;