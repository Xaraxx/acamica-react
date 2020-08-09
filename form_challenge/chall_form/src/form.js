import React from 'react'

const Form = (props) =>{
    return(
        <div className="form-container">
            <h2>Dialog  Box</h2>
                <form className="message-form" onSubmit={props.handleSubmit}>
                    <input
                        name="message-box"
                        value={props.message}
                        onChange={props.handleMessage}
                        placeholder="Write your message"
                    />
                </form>
        </div>
    )
}

export default Form
