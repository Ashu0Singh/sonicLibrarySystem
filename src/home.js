import React from "react";
import './home.css';
import homeBg from './images/homeBg.png';
export default function Home(){
    const myStyle={
        backgroundImage: `url(${homeBg})`,
        height:'100%',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return(
        <div style={myStyle}>

        </div>
    );
}