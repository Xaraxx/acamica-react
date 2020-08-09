import React from 'react'
import Form from './form'
import MessageList from './messageList'

class Box extends React.Component{
    state = {
        message:'',
        messages: [],
        position: ['left', 'center', 'right'],
        existsMessages : false,
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
                messages:  [...oldState.messages, {message: message, watch: false}],
                existsMessages: true
            }
        })
    }

    handleWatch = (event, index) => {
        
        event.persist()
        this.setState((oldState) => {
            const messages = [...oldState.messages]
            messages[index].watch = true
            
            return {
                messages: messages
            }
        })
    }


    handleDelete = (event, index) => {
        event.persist()

        this.setState( (state) => {
  
            var remainderMessages = [...state.messages]
            remainderMessages.splice(index, 1)
            return {
                messages: remainderMessages,
                existsMessages: true
            }
        })
    }


    render(){
        const {message, messages, existsMessages} = this.state
        return(
            <div className='box-container'>
                <Form 
                message={message} 
                handleMessage={this.handleMessage} 
                handleSubmit={this.handleSubmit}
                />
                <MessageList 
                messages={messages}
                handleDelete={this.handleDelete}
                handleWatch={this.handleWatch}
                condition={existsMessages}
                />
            </div>
        )
    }

}

export default Box