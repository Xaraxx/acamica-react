import React from 'react';

import AlbumRating from './AlbumRating'
import AlbumImage from './AlbumImg'
import AlbumDetail from './AlbumDetail';
const Card = (props) => {
    return(
        <div className="card album-card">
            <div className="card-content">
                <AlbumImage img={props.album.img}/>
                <AlbumDetail {...props.album}/>
            </div>
            
            <AlbumRating rate={props.album.rating}/>
        </div>
    )
}

export default Card