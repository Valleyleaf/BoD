import React from "react";
import "./loading.css"

import { TailSpin } from 'react-loader-spinner';


import Logo from '../img/BoDlogo.png'

export default function Loading(){
    return(
            <div className="LoadingMain">
                <img className="Loadinglogo bounce" src={Logo}></img>
                <div className="Logo-container ">
                    <TailSpin
                    visible={true}
                    height="120"
                    width="120"
                    color="#00FFFF"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />  
                </div>

            </div>
    );
};