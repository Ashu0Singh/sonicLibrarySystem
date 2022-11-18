import React from "react";
import Navbar from "./navBar";
import './sector1.css';
import { Link } from "react-router-dom";
export default function Sector1(){
    return(
        <div className="sector1Body">
            <Navbar/>
            <div className="sector1MainBody">
                <div className="arrowTitle">
                    <Link to="/dashboard">
                    <img src={process.env.PUBLIC_URL+"/images/backArrowIcon.png"} className="backArrowIcon" alt="logo"/>
                    </Link>
                    <span>Sector - 1</span>
                </div>
                <div className="sectorSubBody">
                    <div className="sectorContainer" >
                        <div className="sector1"><span>1</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>2</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>3</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>4</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>5</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>6</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>7</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>8</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                    </div>
                </div>
                <div className="sectorFooter" >
                    <div><span className="footerTitle" >Terminology</span></div>
                    <div className="footerBody" >
                        <div className="colorFoot">
                            <div className="colorG"></div>
                            <span>Silent and no need to<br/>monitor</span>
                        </div>
                        <div className="colorFoot">
                            <div className="colorY"></div>
                            <span>Moderate and might need<br/>monitoring</span>
                        </div>
                        <div className="colorFoot">
                            <div className="colorR"></div>
                            <span>High and needs to be<br/>monitored</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 