import React from "react";
import './navBar.css';
import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <div className="navBody">
            <div className="navLeft" ><span>Sonic Library System</span></div>
            <div className="navRight" >
                <img src={process.env.PUBLIC_URL+"/images/userIcon.png"} alt="userIcon" />
                <span>Administrator</span>
                <Link to="/">
                <img src={process.env.PUBLIC_URL+"/images/menuIcon.png"} className="menuIcon" alt="menuIcon" />
                </Link>
            </div>
        </div>
    );
}