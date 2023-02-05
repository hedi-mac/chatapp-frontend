import React from 'react';
import { Link } from "react-router-dom";
import profile from '../../media/images/conan.png'

function UserBox(props) {
    return (
        <div className={`userbox flex`}>
            <div className={`you rel flex aic`}>
                <Link to="#" className={`user`}>
                    <img src={profile} height="50" width="50"/>
                </Link>
            </div>
            <div className={`actions rel flex aic`}>
                <button className={`fa-solid fa-message s24`}/>
                <button className={`fa-solid fa-ellipsis-vertical s24`}/>
            </div>
        </div>
    );
}

export default UserBox;




