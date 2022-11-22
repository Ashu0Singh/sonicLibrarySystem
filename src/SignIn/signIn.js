import React from "react";
import './signIn.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { motion } from 'framer-motion';

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
            url:"http://172.18.177.29:4000/signin",
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
            <motion.div className="signHeader" initial={{ y: '-20vh',opacity:0}} animate={{y:'0vh',opacity:1}} transition={{type:'spring', duration: 3, bounce:0.3}} >
                <span className="headerText">Sonic Library System</span>
                <Link to="/">
                <img className="homeIcon" src={process.env.PUBLIC_URL+"/images/homeIcon.png"} alt="icon"/>
                </Link>
            </motion.div>
            <div className="signContent" >
                <motion.div className="leftField" initial={{ x: '-100vw',opacity:0}} animate={{x:0,opacity:1}} transition={{type:'spring', duration: 2, bounce:0}} >
                    <span>WELCOME BACK USER,<br/>LOGIN</span>
                </motion.div>
                <img src={process.env.PUBLIC_URL+"/images/midLine.png"} alt="midLine"/>
                <motion.div className="rightField" initial={{ x: '+100vw',opacity:0}} animate={{x:0,opacity:1}} transition={{type:'spring', duration: 2, bounce:0}} >
                    <input type="text" onChange={handleChange} placeholder="Email/Username" name="email" className="boxEmail" />
                    <input type="password" onChange={handleChange} placeholder="Password" name="password" className="boxPass" />
                    <span className="forgotText" onClick={handleForgot} >Forgot Password?</span>
                    <Link to="/dashboard">
                    <button className="signInButton" onClick={handleLogin}>Login</button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}