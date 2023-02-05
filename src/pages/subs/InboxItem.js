import React from 'react';
import { Link } from "react-router-dom";
import profile from '../../media/images/conan.png'

function InboxItem(props) {
    return (
        <div className={`conversation flex rel aic`}>
            <div className={`you rel flex aic`}>
                <Link to="#" className={`user`}>
                    <img src={profile} height="50" width="50"/>
                </Link>
            </div>
            <div className={`meta rel flex aic`}>
                <div className={`info rel flex col`}>
                    <h2 className={`name s14 b wordwrap`}>Conan Edogawa</h2>
                    <h2 className={`last-msg s13 c333 wordwrap`}>The strong one yeah.</h2>
                </div>
                <div className={`extra rel flex col aic`}>
                    <h2 className={`name s11 c777`}>11:04 PM</h2>
                    <div className={`badge rel s12 cfff`}>
                        99+
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InboxItem;
