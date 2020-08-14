import React from 'react'
import Form from './form'
import MessageList from './messageList'

const box = ({value, handleMessage, handleSubmit, handleDelete, handleWatch, existsMessages, id}) => (
    <div className='box-container'>
        <Form 
            message={value.message} 
            handleMessage={(event) => handleMessage(event, id)} 
            handleSubmit={(event) => handleSubmit(event, id)}
        />
        <MessageList
            id={id}
            messages={value.messages}
            handleDelete={handleDelete}
            handleWatch={handleWatch}
            condition={existsMessages}
        />
    </div>
)

export default box