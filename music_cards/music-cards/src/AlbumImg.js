import React from 'react'

const AlbumImage = (props) =>{
    return(
        <div className="album-img">
            <img src={props.img} alt="album-img"></img>            
        </div>
    )
}

export default AlbumImage