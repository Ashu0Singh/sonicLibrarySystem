import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Home(){
    function handleClick(){
        
    }
    return(
        <div className="homePage">
            <Link to="/signIn">
            <button className="loginBtn" onClick={handleClick}
            >Login</button>
            </Link>
            <motion.span className="title" initial={{ y: '+10vh',opacity:0}} animate={{y:'0vh',opacity:1}} transition={{type:'spring', duration: 3, bounce:0.3}}>Sonic Library system
            </motion.span>
            <div className="description">
                <motion.span className="descText"  initial={{ y: '+10vh',opacity:0}} animate={{y:'0vh',opacity:1}} transition={{type:'spring', duration: 3, bounce:0.3,delay:1}}  >
                Sonic Library System is a software to overcome few problems faced by librarians and
                fellow students who make optimal use of the library.  In the library, as we have noticed
                that it's tough maintaining silence over multiple tables due to lack of man-power.
                </motion.span>
            </div>
            <div className="footer" >
                <div className="leftInner">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} >
                    ABOUT US    
                    </motion.span>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} >
                    Sonic Library System is an initiative of a team of 6 people called “808”. 
                    808 is not just a team. they are frameworks to one another's strengths.
                    They believe in developing new and utility-complete projects.
                    </motion.span>
                </div>
                <div className="rightInner">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} >
                    To Register, Contact VTOP
                    </motion.span>
                </div>
            </div>
        </div>
    );
}