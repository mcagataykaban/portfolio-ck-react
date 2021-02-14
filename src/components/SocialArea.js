import React from 'react'
import { GitHub, LinkedIn,Email } from '@material-ui/icons';
import './SocialArea.css'
const SocialArea = () => {
    return (
        <div className="social-area">
            <div><GitHub /><a href="https://github.com/mcagataykaban">mcagataykaban</a></div>
            <div><LinkedIn /><a href="https://www.linkedin.com/in/cagatay95/">mcagataykaban</a></div>
            <div><Email /><a href="mailto:mcagataykaban@gmail.com">mcagataykaban@gmail.com</a></div>
        </div>
    )
}


export default SocialArea
