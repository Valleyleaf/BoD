import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import "./header.css"
import Logo from '../img/BoDlogo.png'


export default function Header(){
    return(
            <div className="flexRow center-content">
                <a href="/">
                    <img className="header-logo" src={Logo}></img>
                </a>
                <Navbar />
            </div>
    );
};