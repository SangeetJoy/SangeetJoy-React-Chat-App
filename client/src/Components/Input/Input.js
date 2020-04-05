import React from 'react'
import './Input.css'

const Input = ({message,setMessage,sendMessage}) => {
    return(
        <div className='input-container'>
         <input
            placeholder='type a message'
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress = {event => event.key === 'Enter' ? sendMessage(event) : null }
            >
        </input>
        {/* <i className="fas fa-share"></i> */}
        <button className='button btn btn-primary' type='submit'>SEND</button>
        </div>
    )
}

export default Input