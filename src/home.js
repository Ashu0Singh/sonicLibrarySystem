import React from "react";
import './home.css';
import { Link } from "react-router-dom";
export default function Home(){
    function handleClick(){
        
    }
    return(
        <div className="homePage">
            <Link to="/signIn">
            <button className="loginBtn" onClick={handleClick}>Login</button>
            </Link>
            <span className="title" >Sonic Library system</span>
            <div className="description">
                <span className="descText">
                Sonic Library System is a software to overcome few problems faced by librarians and
                fellow students who make optimal use of the library.  In the library, as we have noticed
                that it's tough maintaining silence over multiple tables due to lack of man-power.
                </span>
            </div>
            <div className="footer" >
                <div className="leftInner">
                    <span>
                    ABOUT US
                    </span>
                    <span>
                    Sonic Library System is an initiative of a team of 6 people called “808” . 
                    808 is not just a team. they are frameworks to one another's strengths.
                    They believe in developing new and utility-complete projects.
                    </span>
                </div>
                <div className="rightInner">
                    <span>
                    To Register, Contact VTOP
                    </span>
                </div>
            </div>
        </div>
    );
}