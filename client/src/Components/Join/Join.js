import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css'

const Join = () => {
    const [name,setName] = useState('')
    const [room,setRoom] = useState('')
    return (
        <div className='join-container'>
          <div className='join-header mb-3'>Join</div>
          <div><input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}></input></div>
          <div><input type='text' placeholder='Room' onChange={(e) => setRoom(e.target.value)}></input></div>
          <Link onClick={(e) => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button type='submit' className='btn btn-block btn-primary mt-3'>SUBMIT</button>
          </Link>
        </div>
    )
}

export default Join;