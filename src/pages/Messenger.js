import React, { Fragment } from 'react';
import { connect } from "react-redux";
import Inbox from "./Inbox";
import ChatBox from "./ChatBox";

function Messenger(props) {
    return (
        <Fragment>
            <div className={`green-belt`}/>
            <div className={`messenger fixed flex`}>
                <Inbox/>
                <ChatBox/>
            </div>
        </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Messenger); 