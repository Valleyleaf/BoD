import React from "react";
import renderArticle from "./RenderArticle"

export default function Home(){
    return(
            <div className="flexColumn">
                <div>
                <renderArticle/>
                </div>
                <div>
                    Page flip buttons go here
                </div>
            </div>
    );
};

//Need to add functionality to go through multible pages.
//Render 10 articles, then add page flip.