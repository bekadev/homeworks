import React from 'react'
import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Bekzat Kyzyrbayev',
    message: 'Hello, she didn’t do anything and rested all day, how are you?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <AlternativeMessage/>
        </div>
    );
}

export default HW1
