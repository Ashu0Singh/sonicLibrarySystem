import React from "react";
import Navbar from "./navBar";
import './sector1.css';
import { Link } from "react-router-dom";
import clientSocket from 'socket.io-client';
export default function Sector1(){
    const [style,setStyle]=React.useState({backgroundColor:'rgba(20, 255, 0, 0.8)'});
    React.useEffect(() => {
        const socket=clientSocket('http://192.168.137.220:4000');
        socket.on('dataArduino',response=>{
            if(response.data.noiseLevel==="MID" && style.backgroundColor !=='rgba(255, 138, 0, 0.8)')
                setStyle(prev=>({backgroundColor:'rgba(255, 138, 0, 0.8)'}));
            else if(response.data.noiseLevel==="HIGH")
                setStyle(prev=>({backgroundColor:'rgba(255, 49, 49, 0.8)'}));
        });
    }, []);
    function handleClick(){
        setStyle(prev=>({backgroundColor:'rgba(20, 255, 0, 0.8)'}));
    }
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
                        <div className="sector1" ><span>1</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1" style={style} onClick={handleClick} ><span>2</span>
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