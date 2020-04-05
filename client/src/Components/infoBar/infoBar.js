import React from 'react'
import closeIcon from '../../../src/icons/closeIcon.png'
import onlineIcon from '../../../src/icons/onlineIcon.png'
import './infoBar.css'

const Infobar = ({room}) => {
    return (
        <div className='infobar-container'>
            <div className='left-container'>
             <img className='online-icon' src={onlineIcon}></img>
             <h3>{room}</h3>
            </div>
            <div className='right-container'>
             <a href='/'><img className='close-icon' src={closeIcon}></img></a>
            </div>
        </div>
    )
}

export default Infobar