import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar(){
    return(
            <div className="navbarClass">
                <Link 
                    to="/"
                    className='buttonClass'>
                    Home
                </Link>

                <Link 
                    to="/News"
                    className='buttonClass'>
                    News
                </Link>

                <Link 
                    to="/Commanders"
                    className='buttonClass'>
                    Commanders
                </Link>

                <Link 
                    to="/Game"
                    className='buttonClass'>
                    Game
                </Link>

                <Link 
                    to="/PatchNotes"
                    className='buttonClass'>
                    Patch Notes
                </Link>
            </div>
    );
};