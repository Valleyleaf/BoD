import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="navbar-toggle" onClick={toggleMenu}>
                &#9776;
            </div>
            <nav className={`navbarClass${isOpen ? ' open' : ''}`}>
                <Link 
                    to="/"
                    className='NavbuttonClass'
                    onClick={() => setIsOpen(false)}>
                    Home
                </Link>

                <Link 
                    to="/News"
                    className='NavbuttonClass'
                    onClick={() => setIsOpen(false)}>
                    News
                </Link>

                <Link 
                    to="/Commanders"
                    className='NavbuttonClass'
                    onClick={() => setIsOpen(false)}>
                    Commanders
                </Link>

                {/* <Link 
                    to="/Items"
                    className='NavbuttonClass'
                    onClick={() => setIsOpen(false)}>
                    Items
                </Link> */}

                {/* <Link 
                    to="/Game"
                    className='NavbuttonClass'
                    onClick={() => setIsOpen(false)}>
                    Game
                </Link> */}

                <Link 
                    to="/PatchNotes"
                    className='NavbuttonClass'
                    onClick={() => setIsOpen(false)}>
                    Patch Notes
                </Link>
            </nav>
        </>
    );
}