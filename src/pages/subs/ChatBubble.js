import React from 'react';

function ChatBubble(props) {

    const { dir } = props;

    return (
        <div className={`bubble flex rel ${dir === 1 ? 'mine' : 'notmine'}`}>
            <div className={`ballon rel`}>
                <h2 className={`name s13 b`}>Conan Edogawa</h2>
                <p className={`text s13`}>
                    The strong one doesn't win. The one that wins is strong.
                    The strong one doesn't win. The one that wins is strong.
                </p>
                <h2 className={`stamp abs s11 c777`}>03:54 PM</h2>
            </div>
        </div>
    );
}

export default ChatBubble;

