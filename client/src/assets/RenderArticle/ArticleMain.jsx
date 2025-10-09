import React, { useState } from "react";
import RenderArticle from "./RenderArticle.jsx";
import {Articles} from "../Info/Articles/Articles.js";
import articleService from "../../services/articleService.js";

export default function Home({ articles }) {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 5;

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
                <button 
                    className="ArticlePageButton"
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 1}>
                    Previous
                </button>
                <button
                className="ArticlePageButton"
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(Articles.length / articlesPerPage)}>
                    {/* Hide above if there are no articles to display or grey out */}
                    Next
                </button>
            </div>
        </div>
    );
}

// Need to set up backend for Articles. Create search function for articles, including keywords, tags, categories, etc. Articles will be stored on Atlas.
// How to generate articles? Add a form to the admin panel that allows for article creation and editing maybe.