import React from 'react'
import Delete from './images/del2.svg'
import Watch from './images/wat1.svg'


const sawAndDelete = (props) =>{
    return(
        <div className="group-buttons">
            <button 
            className="delete-button"
            onClick={(event) => props.delete(event, props.index)}
            >
                <img src={Delete} width="24" height="24" alt="Delete"/>
            </button>
            <button className="saw-button">
                <img src={Watch} width="24" height="24"  alt="watch-button"/>     
            </button>
        </div>
    )
}

export default sawAndDelete