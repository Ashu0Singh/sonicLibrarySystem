import React from "react";
import './navBar.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Navbar(){
    const [dataVisi,setDataVisi]=React.useState("false");
    function handleClick(){
        if(dataVisi==="false")
            setDataVisi(prev=>"true");
        else
            setDataVisi(prev=>"false");
    }
    return(
        <div className="navBody">
            <motion.div className="navLeft" initial={{ x: '-100vw',opacity:0}} animate={{x:'0vw',opacity:1}} transition={{type:'spring', duration: 1.5, bounce:0}}>
                <span>Sonic Library System</span></motion.div>
            <motion.div className="navRight" initial={{ x: '+100vw',opacity:0}} animate={{x:'0vw',opacity:1}} transition={{type:'spring', duration: 1.5, bounce:0}}>
                <img src={process.env.PUBLIC_URL+"/images/userIcon.png"} alt="userIcon" />
                <span>Administrator</span>
                <img src={process.env.PUBLIC_URL+"/images/menuIcon.png"} onClick={handleClick} className="menuIcon" alt="menuIcon" />
                <div className="navPane"  data-visibility={dataVisi} >
                    <div className="navPaneTitle"><img src={process.env.PUBLIC_URL+"/images/closeIcon.png"} className="closeIcon" onClick={handleClick} alt="" /></div>
                    <div className="navPaneBody">
                        <div className="imageBg">
                            <img src={process.env.PUBLIC_URL+"/images/userIconBlack.png"} className="userIconBlack" alt="blackUser" />
                        </div>
                        <span className="navBodyText">Administrator</span>
                    </div>
                    <Link to="/">
                        <button className="navPaneButton">Logout</button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}