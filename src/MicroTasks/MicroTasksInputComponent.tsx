import React, {useState} from 'react';
import {InputComponent} from './InputComponent';

export const MicroTasksInputComponent = () => {
    let [message, setMessage] = useState([
        {message: 'hi'},
        {message: 'hello'},
        {message: 'buy'}
    ])
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    return (
        <div>
            <InputComponent addMessage={addMessage}/>
            {message.map((el,index)=>{
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};