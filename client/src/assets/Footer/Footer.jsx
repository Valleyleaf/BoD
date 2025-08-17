import React from "react";
import './footer.css';

export default function Footer(){
    return(
            <div className="FooterBase flexColumn center-content">
                <span className="spacer" />
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

            </div>
    );
};

//Add contact information here.
//Add links to social media here.