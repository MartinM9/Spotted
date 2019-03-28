import React from 'react'

const YouCar = ( {data} ) => {
    console.log(data);
    return(
        <>
            <div>
                <img src={data.thumbnail} alt=""/>
            </div>
        </>
    )
}

export default YouCar;