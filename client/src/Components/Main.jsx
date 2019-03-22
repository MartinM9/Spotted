import React, {Component} from 'react';
import video from '../Style/Beach.mp4';
import logo from '../Style/logo_transparent.png';

class Main extends Component {



    render() {
        return(
            <div className="content">
                <div className="video-div">
                    <div className="layer"></div>
                    <div className="main-layer-content-div">
                        <img src={logo} alt=""/>
                        <p>Spot it, share it and spot some more.</p>
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
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Main;