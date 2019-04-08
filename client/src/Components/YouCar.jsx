import React from 'react'

const YouCar = ( {data} ) => {
    return(
        <>
            <div className="news-div-mobile">
                <a href={data.link} rel="noopener noreferrer" target="_blank"><img src={data.thumbnail} alt=""/></a>
                <div className="data-title">
                <a href={data.link} rel="noopener noreferrer" target="_blank"><p>{data.title}</p></a>
                </div>
            </div>
        </>
    )
}

export default YouCar;