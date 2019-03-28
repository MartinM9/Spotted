import React from 'react'

const Spot =( {spot, showSingleSpot, loggedIn} ) => {
    return(
        <>  
            {loggedIn && <div className="car-image-div">
                <img  onClick={e => showSingleSpot(e, spot._id)} src={spot.image} alt="Car" />
            </div>}
            {!loggedIn && <div className="car-image-div-not-logged">
                <img src={spot.image} alt="Car" />
            </div>}
        </>
    )
}


export default Spot;