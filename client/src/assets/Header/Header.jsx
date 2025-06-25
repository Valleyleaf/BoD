import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import Logo from '../img/BoDlogo.png'


export default function Header(){
    return(
            <div>
                <a href="/">
                    <img className="logo" src={Logo}></img>
                    {/* Add background? Seems barren, needs more in terms of design. */}
                </a>
            </div>
    );
};