import React from "react";
import './signIn.css';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function SignIn(){
    const [creds,setCreds]=React.useState({email:"",password:""});
    function handleChange(event){
        setCreds(prev=>({
            ...prev,
            [event.target.name]:event.target.value
        }));
        console.log(creds);
    }
    function handleLogin(){
        axios({
            method: 'post',
            url:"http://localhost:4000/signin",
            headers: {'Content-Type': 'application/json'}, 
            withCredentials:true,
            data: {
                email:creds.email,
                password:creds.password
            }
        }).then(response=>console.log(response.data));
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