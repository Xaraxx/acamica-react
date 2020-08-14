import React from 'react'
import MessageItem from './button'

const messageList = (props) =>{

    return(
        <div className={`${ props.condition && props.messages.length !== 0 ? "message-list" : ""}`}>
        
            {props.messages.map((message, index) => (
                <MessageItem
                    key={index}
                    onDelete={(event) => props.handleDelete(event, props.id, index)}
                    onWatch={(event) => props.handleWatch(event, props.id, index)}
                    index={index}
                    message={message}
                />
            ))}
        
        </div>
    )
}

export default messageList