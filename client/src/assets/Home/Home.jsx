import React, { useState } from "react";
import RenderArticle from "./RenderArticle";

export default function Home({ articles }) {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 5;

    const startIndex = (currentPage - 1) * articlesPerPage;
    //-1 to ensure that the index starts at 0.
    const endIndex = startIndex + articlesPerPage;
    const currentArticles = articles.slice(startIndex, endIndex);
    //Personal note. If no Articles are passed, currentArticles will be an empty array.
    //Make sure I have article to pass when testing this component.
    const handleNextPage = () => {
        if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
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
                {currentArticles.map((article, index) => (
                    <RenderArticle key={index} article={article} />
                    //The above should be changed to article.id when adding search function.
                ))}
            </div>
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(articles.length / articlesPerPage)}
                    //Hide above if there are no articles to display or grey out?
                >
                    Next
                </button>
            </div>
        </div>
    );
}