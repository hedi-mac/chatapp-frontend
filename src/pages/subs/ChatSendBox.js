import React from 'react';

function ChatSendBox(props) {
    return (
        <div className={`sendbox flex aic`}>
            <button className={`fa-regular fa-face-smile s24`}/>
            <textarea className={`new-message s14 font`} placeholder={`Type a message . . . `}/>
            <button className={`fa-solid fa-microphone s24`}/>
        </div>
    );
}

export default ChatSendBox;
