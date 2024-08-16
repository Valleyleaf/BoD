import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

export default function Header(){
    return(
            <div>
                <a href="/">
                    <img className="logo" src="../public/Bodlogo.png"></img>
                </a>
            </div>
    );
};