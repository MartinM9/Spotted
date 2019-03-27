import React from 'react'

const Spot =( {spot, showSingleSpot} ) => {
    return(
        <>  
            <div className="car-image-div">
                <img  onClick={e => showSingleSpot(e, spot._id)} src={spot.image} alt="Car" />
            </div>
        </>
    )
}


export default Spot;