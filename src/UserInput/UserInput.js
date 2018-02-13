import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserIp">
            <input type="text" onChange={props.changed} placeholder={props.name}/>
        </div>
    )
}

export default UserInput;