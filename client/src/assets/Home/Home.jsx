import React, { useState } from "react";
import RenderArticle from "./RenderArticle";

export default function Home({ articles }) {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 5;

    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const currentArticles = articles.slice(startIndex, endIndex);

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
                ))}
            </div>
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(articles.length / articlesPerPage)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}