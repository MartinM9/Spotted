import React from 'react'

const Spot =( {spot} ) => {
    return(
        <>
            <p>Car: {spot.car}</p>
            <p>Type: {spot.type} </p>
            <p>Engine: {spot.engine} </p>
            <p>Horsepower: {spot.horsepower} </p>
            <p>Author: {spot.author.username}</p>
            <img src={spot.image} alt="Car" />
        </>
    )
}


export default Spot;