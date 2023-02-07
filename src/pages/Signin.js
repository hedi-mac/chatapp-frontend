import React, { Fragment } from 'react';
import logo from '../media/logo100.png'

function Signin(props) {
    return (
        <Fragment>
            <div className={`green-belt`}/>
            <div className={`authcont flex`}>
                <div className={'auth fixed'}>
                    <img src={logo} className={`logo bl`}/>
                    <h2 className={`s20 font title`}>Sign in</h2>
                    <h2 className={`s15 font slogan`}>Please sign in using your google account</h2>
                    <button className="loginbtn">
                        <i className="fa-brands fa-google"></i>
                        <div className={`btncont`}>Login with google</div>
                    </button>
                </div>
            </div>
        </Fragment>
        
            
    );
}

export default Signin;
