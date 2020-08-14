import React from "react"
import Box from "./boxForm"

class Container extends React.Component {
    state = {
        "box1": {
            message:'',
            messages: [],
            existsMessages : false,
        },
        "box2":{
            message:'',
            messages: [],
            existsMessages : false,
        },
        "box3":{
            message:'',
            messages: [],
            existsMessages : false,
        },
    }

    handleMessage = (event, box) => {
        event.persist()
        this.setState(state => {
            state[box] = {
                message: event.target.value,
                messages: state[box].messages,
                existsMessages : state[box].existsMessages
            }
            return state
        })
    }

    handleSubmit = (event, box) => {
        event.preventDefault()
        console.log("handle submit")
        this.setState((prevState) => {
            const {message} = prevState[box]
            console.log(message)
            return {[box]: {
                message:'',
                messages:  [...prevState[box].messages, {message: message, watch: false}],
                existsMessages: true
            }}
        })
    }

    handleWatch = (event, box, index) => {
        event.persist()
        this.setState((oldState) => {
            const messages = [...oldState[box].messages]
            messages[index].watch = true
            
            return {[box]: {
                message: oldState[box].message,
                messages: messages
            }}
        })
    }


    handleDelete = (event, box, index) => {
        event.persist()
        this.setState( (state) => {
            var remainderMessages = [...state[box].messages]
            remainderMessages.splice(index, 1)
            return {[box]: {
                messages: remainderMessages,
                message: state[box].message,
                existsMessages: true
            }}
        })
    }

    render() {
        return (
            <div>
                <Box 
                    id="box1"
                    value={this.state.box1}
                    handleMessage={this.handleMessage}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                    handleWatch={this.handleWatch}
                />
                <Box 
                    id="box2"
                    value={this.state.box2}
                    handleMessage={this.handleMessage}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                    handleWatch={this.handleWatch}
                />
             </div>
        )
    }
}

export default Container