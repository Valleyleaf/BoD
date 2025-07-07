import React from "react";
import topic from "./Topic.js";
import "./game.css";


export default function GameRender() {
    return topic.map((data, i) => (
        <div className="flexRow" key={i}>
            {i % 2 === 0 ? (
                <>
                    {/* Render content Right */}
                    <div className="topicContainer">
                        <div className="flexColumn leftSide">
                            <h2>{data.title}</h2>
                            <img className="topicThumbnail" src={data.thumbnail} alt="" />
                        </div>
                        <div className="flexColumn rightSide center-content">
                            <p>{data.content}</p>
                        </div>
                    </div>

                </>
            ) : (
                <>
                    {/* Render content Left */}
                    <div className="topicContainer">
                        <div className="flexColumn leftSide center-content">
                            <p>{data.content}</p>
                        </div>
                        <div className="flexColumn rightSide">
                            <h2>{data.title}</h2>
                            <img className="topicThumbnail" src={data.thumbnail} alt="" />
                        </div>
                    </div>

                </>
            )}
        </div>
    ));
};
