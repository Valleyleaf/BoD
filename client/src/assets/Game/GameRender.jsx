import React from "react";
import Topic from "../Topic";
import "./game.css"


export default function GameCommander(){
    return Topic.map((data) => (
            <div className="flexColumn">
                <h2>{data.title}</h2>
                <p>{data.content}</p>
                <img src={data.Thumbnail} alt="" />
            </div>
    ));
};

//Put in two divs here, one for left and one for right render. Create
//a map function that renders based on odds and evens. If odd, render left, if even, render right.
