import React from 'react';
import logo from '../media/logo50.png'

function Splash(props) {
    return (
        <div className={`splash abs abc`}>
            <div class="loader">
                <img src={logo} className={`logo`}/>
            </div>
            
            {/*<h2 className={`s30 abs abc`}>HRmessApp</h2>*/}
        </div>
    );
}

export default Splash;

