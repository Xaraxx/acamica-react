import React from 'react'
import SawAndDelete from './button'

const messageList = (props) =>{
    return(
        <div className='message-list'>
        
            {props.messages.map((message, index) => (
                <div key={index}>
                    {message} <SawAndDelete delete={props.handleDelete}  index={index}/>
                </div>  
            ))}
        
        </div>
    )
}

export default messageList