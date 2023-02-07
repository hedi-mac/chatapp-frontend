import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

function ChatSendBox(props) {

    const [message, setMessage] = useState("");
    const [openEmojiBox, setOpenEmojiBox] = useState(false);

    return (
        <div>
            { openEmojiBox && <div className={`picker`}>
                    <Picker onEmojiClick={(emojiObject, event) => {setMessage(message+emojiObject.emoji)}}/>
                </div> }
            <div className={`sendbox flex aic`}>
                <button 
                    onClick={() => { setOpenEmojiBox(!openEmojiBox) }}
                    className={`fa-regular fa-face-smile s24`}/>
                <div className={`form`}>
                    <form>
                        <textarea 
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                console.log(message);
                            }}
                            className={`new-message s14 font`} 
                            placeholder={`Type a message . . . `}/>
                    </form>
                </div>
                <button className={`fa-solid fa-microphone s24`}/>
            </div>
        </div>
        
    );
}

export default ChatSendBox;
