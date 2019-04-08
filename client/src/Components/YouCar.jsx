import React from 'react'

const YouCar = ( {data} ) => {
    return(
        <>
            <a href={data.link} rel="noopener noreferrer" target="_blank"><img src={data.thumbnail} alt=""/></a>
            <div className="data-title">
                <a href={data.link} rel="noopener noreferrer" target="_blank"><p>{data.title}</p></a>
            </div>
        </>
    )
}

export default YouCar;