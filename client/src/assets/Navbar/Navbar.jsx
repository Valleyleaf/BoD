import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar(){
    return(
            <nav className="navbarClass">
                <Link 
                    to="/"
                    className='NavbuttonClass'>
                    Home
                </Link>

                <Link 
                    to="/News"
                    className='NavbuttonClass'>
                    News
                </Link>

                <Link 
                    to="/Commanders"
                    className='NavbuttonClass'>
                    Commanders
                </Link>

                {/* <Link 
                    to="/Items"
                    className='NavbuttonClass'>
                    Items
                </Link> */}

                {/* <Link 
                    to="/Game"
                    className='NavbuttonClass'>
                    Game
                </Link> */}

                <Link 
                    to="/PatchNotes"
                    className='NavbuttonClass'>
                    Patch Notes
                </Link>
            </nav>
    );
};