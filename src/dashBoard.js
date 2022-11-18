import React from "react";
import './dashBoard.css';
import Navbar from "./navBar";
import { Link } from "react-router-dom";
export default function Dashboard(){
    return(
        <div className="dashboardBody">
            <Navbar/>
            <div className="lowerDash">
                <div className="sectorBody">
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
                </div>
            </div>
        </div>
    );
}