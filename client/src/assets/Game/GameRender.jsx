import React from "react";
import topic from "./Topic.js";
import "./game.css";

function nextTopic(){

}

function previousTopic(){
    
}

export default function GameRender() {
    return topic.map((data, i) => (
        <div className="topicContainer">
            <div className="topicInternal">
                <div className="gameInfoBox">
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>
                        <div className="flexRow center-content">
                            <button onClick={previousTopic}><h2>{data.buttonText}</h2></button>
                            <button onClick={nextTopic}><h2>{data.buttonText}</h2></button>
                        </div>
                </div>
                <div className="gameImageBox">
                    <img src={data.thumbnail} alt={data.alt} />
                </div>
            </div>
        </div>
    ));
};
