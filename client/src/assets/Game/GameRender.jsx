import React from "react";
import topic from "./Topic";
import "./game.css";


export default function GameRender() {
    return topic.map((data, i) => (
        <div className="flexRow" key={i}>
            {i % 2 === 0 ? (
                <>
                    {/* Render content Right */}
                    <div className="flexColumn leftSide">
                        <h2>{data.title}</h2>
                        <img src={data.Thumbnail} alt="" />
                    </div>
                    <div className="flexColumn rightSide">
                        <p>{data.content}</p>
                    </div>
                </>
            ) : (
                <>
                    {/* Render content Left */}
                    <div className="flexColumn leftSide">
                        <p>{data.content}</p>
                    </div>
                    <div className="flexColumn rightSide">
                        <h2>{data.title}</h2>
                        <img src={data.Thumbnail} alt="" />
                    </div>
                </>
            )}
        </div>
    ));
};
