import React, { useState } from "react";
import RenderArticle from "./RenderArticle";
import {Articles} from "../Info/Articles/Articles.js";
import {PatchNotes} from "../Info/PatchNotes/PatchNotes.js";

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
                {currentArticles.map((article) => (
                    <RenderArticle key={article.id} article={article} />
                    //The above should be changed to article.id when adding search function.
                ))}
            </div>
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(Articles.length / articlesPerPage)}
                    //Hide above if there are no articles to display or grey out?
                >
                    Next
                </button>
            </div>
        </div>
    );
}