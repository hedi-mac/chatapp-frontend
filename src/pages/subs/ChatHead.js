import React from 'react';
import { Link } from "react-router-dom";
import profile from '../../media/images/conan.png'

function ChatHead(props) {
    return (
        <div className={`chathead flex`}>
            <div className={`you rel flex aic`}>
                <Link to="#" className={`user`}>
                    <img src={profile} height="50" width="50"/>
                </Link>
                <div className={`meta`}>
                    <h2 className={`name s14`}>Conan Edogawa</h2>
                    <h2 className={`status s12 c777`}>Last online 3 minutes ago</h2>
                </div>
            </div>
            <div className={`actions rel flex aic`}>
                <button className={`fa-solid fa-paperclip s24`}/>
                <button className={`fa-solid fa-ellipsis-vertical s24`}/>
            </div>
        </div>
    );
}

export default ChatHead;

