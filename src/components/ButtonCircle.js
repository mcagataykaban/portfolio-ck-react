import React from 'react'
import './ButtonCircle.css'


const ButtonCircle = (props) => {
    return (
        <div style={{...props.style}} onClick={props.onClick} className="circle-button">
            {props.children}
        </div>
    )
}

export default ButtonCircle
