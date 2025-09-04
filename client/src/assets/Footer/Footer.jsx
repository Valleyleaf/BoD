import React from "react";
import './footer.css';

export default function Footer(){
    return(
            <footer className="FooterBase flexColumn center-content">
                <div className="flexRow">
                    <img className="esrbLogo" src="https://i.imgur.com/SV7rTN0.png" alt="" />
                    <div className="esrbBox">
                        <p>Blood</p>
                        <p>Fantasy Violence</p>
                        <p>Mild Suggestive Themes</p>
                        <p>Use of Alcohol and Tobacco</p>
                        <p>Online Interactions Not Rated by the ESRB</p>
                    </div>
                </div>
                <div className="flexRow">
                    <a href="https://github.com/Valleyleaf/BoD"><img className="socialMediaIcon" src="https://www.svgrepo.com/show/512317/github-142.svg" alt="link to github" /></a>
                    <a href="https://x.com/play_bod"><img className="socialMediaIcon" src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="link to twitter" /></a>
                </div>
                <p className="copyrightText">This is a concept page. Used media is copyrighted material and not for distribution.<br></br>All rights remain beholden to their respective owners.</p>
            </footer>
    );
};

//Add contact information here.
//Add links to social media here.