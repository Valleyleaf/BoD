import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import "./header.css"
import Logo from '../img/BoDlogo.png'


export default function Header(){
    return(
            <div className="headerMain">
                <a href="/">
                    <img className="header-logo" src={Logo}></img>
                </a>
                <Navbar />
                <div className="DownloadButtonContainer">
                    <a href="https://www.hiveworkshop.com/threads/battle-of-dominance-v2-0-arcane-showdown.326630/" target="_blank" rel="noopener noreferrer">
                        <button className="downloadButton">DOWNLOAD</button>
                    </a>
                </div>
            </div>
    );
};