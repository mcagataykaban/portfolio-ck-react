import React from 'react'
import './Avatar.css'
const Avatar = (props) => {
    return (
        <img className={props.className} className="avatar" src={props.src} alt=""/>
    )
}

export default Avatar
