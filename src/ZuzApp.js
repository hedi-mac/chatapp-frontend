import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.scss";

//Pages
import Splash from "./pages/Splash";
import Messenger from "./pages/Messenger";
import Signin from "./pages/Signin";

function ZuzApp(props) {
    const time = 1000;
    const { loaded, session, setState } = props;
    useEffect(()=>{
        setTimeout(()=>{
            setState(true)
        }, time)
    }, [])
    return (
            
        // {  loaded ? <Messenger/> : <Splash/>}  
        <Router>               
            <Fragment>
            { 
                loaded ? session ? <Routes>
                    <Route path="/" element={<Messenger/>}/> : 
                </Routes>: <Signin/> : <Splash/> 
            }
            </Fragment>
        </Router>


    );
}

const mapStateToProps = state => {
    return {
        //loaded: state.App.loaded
        ...state.App
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setState: (loaded) => dispatch({ type: "APP_STATE", state: { loaded: loaded }})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ZuzApp); 
