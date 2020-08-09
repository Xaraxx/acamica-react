import React from 'react'
import Delete from './images/del2.svg'
import unWatch from './images/wat1.svg'
import Watch from './images/wat2.svg'


const sawAndDelete = ({message, onDelete, onWatch, ...props}) =>{
    return(
        <div className="message">
            {message.message}
            <div className="group-buttons">
                <button 
                className="delete-button"
                onClick={onDelete}
                >
                    <img src={Delete} alt="Delete"/>
                </button>
                <button 
                className="saw-button"
                onClick={onWatch}
                >
                    <img src={message.watch === false ? unWatch : Watch } alt="watch-button"/>     
                </button>
            </div>
        </div>
    )
}

export default sawAndDelete