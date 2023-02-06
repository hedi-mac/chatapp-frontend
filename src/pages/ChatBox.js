import React from 'react';
import { connect } from "react-redux";
import ChatHead from './subs/ChatHead';
import ChatMessages from './subs/ChatMessages';
import ChatSenBox from './subs/ChatSendBox';

function ChatBox(props) {
    return (
        <div className={`chatbox rel flex col`}>
            {/* ChatHeader */}
            <ChatHead/>
            {/* Conversation box */}
            <ChatMessages/>
            {/* Send box */}
            <ChatSenBox/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loaded: state.App.loaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setState: (loaded) => dispatch({ type: "APP_STATE", state: { loaded: loaded }})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);