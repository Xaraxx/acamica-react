import React from 'react'
import AlbumRating from './AlbumRating'


const AlbumDetail = (props) =>{
    return(
        <div className="album-detail">
        <h1>{props.artist}</h1>
        <p>{props.name}</p>
        <p>{props.year}</p>
        </div>
    )
}

export default AlbumDetail
