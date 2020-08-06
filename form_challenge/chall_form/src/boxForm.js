import React from 'react'
import Form from './form'
import MessageList from './messageList'

class Box extends React.Component{
    state = {
        message:'',
        messages: [],
        position: ['left', 'center', 'right']
    }

    handleMessage = (event) => {
        event.persist()
        this.setState(
            {message: event.target.value},

        )
    }

    handleSubmit = (event) => {
        const {message} = this.state
        event.preventDefault()
        this.setState((oldState) => {
            return {
                message:'',
                messages:  [...oldState.messages, message]
            }
        }
        
        )
    }

    handleDelete = (event, index) => {
        event.persist()

        this.setState( (state) => {
  
            var remainderMessages = [...state.messages]
            remainderMessages.splice(index, 1)
            return {
                messages: remainderMessages
            }
        })
    }


    render(){
        const {message, messages} = this.state
        return(
            <div className='container'>
                <Form 
                message={message} 
                handleMessage={this.handleMessage} 
                handleSubmit={this.handleSubmit}
                />
                <MessageList 
                messages={messages}
                handleDelete={this.handleDelete}
                />
            </div>
        )
    }

}

export default Box