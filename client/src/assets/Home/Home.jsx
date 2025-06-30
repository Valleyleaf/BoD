import React, { useState } from "react";
import RenderArticle from "./RenderArticle";
import {Articles} from "../Info/Articles/Articles.js";
import {PatchNotes} from "../Info/PatchNotes/PatchNotes.js";
import GamePage from "../Game/Game.jsx"

export default function Home({ articles }) {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;

    const startIndex = (currentPage - 1) * articlesPerPage;
    //-1 to ensure that the index starts at 0.
    const endIndex = startIndex + articlesPerPage;
    const currentArticles = Articles.slice(startIndex, endIndex);
    //Above works but issues exist in RenderArticle.jsx where it tries to find the article by slug.
    const handleNextPage = () => {
        if (currentPage < Math.ceil(Articles.length / articlesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flexColumn">
            <div>
                <h2>Welcome to Battle of Dominance</h2>
                <p>A custom MOBA-style map for WARCRAFT III, 15 years in development.</p>
            </div>
            <div>
                <a href="https://www.hiveworkshop.com/threads/battle-of-dominance-v2-0-arcane-showdown.326630/" target="_blank" rel="noopener noreferrer">
                    <button>DOWNLOAD</button>
                </a>
                <GamePage/>
            </div>
        </div>
    );
}