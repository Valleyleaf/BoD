import React, { useState } from "react";
import topic from "./Topic.js";
import "./game.css";

export default function GameRender() {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % topic.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + topic.length) % topic.length);
    };

    return (
        <div className="topicContainer">
            <div className="topicInternal">
                <div className="gameInfoBox">
                    <h2>{topic[current].title}</h2>
                    <p>{topic[current].content}</p>
                    <div className="buttonContainer">
                        <button className="gameButtons" onClick={handlePrev}><h2>Previous</h2></button>
                        <button className="gameButtons" onClick={handleNext}><h2>Next</h2></button>
                    </div>
                </div>
                <div className="gameImageBox">
                    <img src={topic[current].thumbnail} alt={topic[current].alt} />
                </div>
            </div>
        </div>
    );
}
