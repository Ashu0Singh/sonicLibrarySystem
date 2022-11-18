import React from "react";
import './signIn.css';
import { Link } from "react-router-dom";

export default function SignIn(){
    
    function handleChange(){
        
    }
    function handleLogin(){

    }
    function handleForgot(){

    }
    return(
        <div className="signInBody">
            <div className="signHeader" >
                <span className="headerText">Sonic Library System</span>
                <Link to="/">
                <img className="homeIcon" src={process.env.PUBLIC_URL+"/images/homeIcon.png"} alt="icon"/>
                </Link>
            </div>
            <div className="signContent" >
                <div className="leftField">
                    <span>WELCOME BACK USER,<br/>LOGIN</span>
                </div>
                <img src={process.env.PUBLIC_URL+"/images/midLine.png"} alt="midLine"/>
                <div className="rightField">
                    <input type="text" onChange={handleChange} placeholder="Email/Username" name="email" className="boxEmail" />
                    <input type="password" onChange={handleChange} placeholder="Password" name="password" className="boxPass" />
                    <span className="forgotText" onClick={handleForgot} >Forgot Password?</span>
                    <Link to="/dashboard">
                    <button className="signInButton" onClick={handleLogin}>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}