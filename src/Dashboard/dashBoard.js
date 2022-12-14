import React from "react";
import './dashBoard.css';
import Navbar from "../Navbar/navBar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Dashboard(){
    return(
        <div className="dashboardBody">
            <Navbar/>
            <div className="lowerDash">
                <motion.div className="sectorBody" initial={{ y: '-20vh',opacity:0}} animate={{y:'0vh',opacity:1}} transition={{type:'spring', duration: 3, bounce:0.3}}>
                    <Link to="/sector1">
                        <div className="sector">
                            <span>Sector - 1</span>
                        </div>
                    </Link>
                    <div className="sector">
                        <span>Sector - 2</span>
                    </div>
                    <div className="sector">
                        <span>E- Library</span>
                    </div>
                    <div className="sector">
                        <span>Discussion<br/>Room</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}