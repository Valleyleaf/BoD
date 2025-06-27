import {Articles} from '../Info/Articles/Articles.js';
import {Link} from 'react-router-dom';
import './renderArticle.css';
//Above is temporary import for testing purposes. Replace with backend import when ready.

export default function RenderArticle({ article }) {
  if (!article) return <h2>Article information not found.</h2>;
  //If no post is found, return an error message.
  return (
    <div   className='ArticleBackGround'>
      <div className="flexColumn ArticleContainer">
        <h1 className='ArticleTitle'>{article.title}</h1>
      </div>
      <div className="flexRow">
        <img className="ArticleThumbnail" src={article.thumbnail} alt={article.title} />
        <p className='ArticleTextContainer'>{article.content}</p>
      </div>
      <Link to={`/article/${article.slug}`} key={article.name} className=''>Read more</Link>
      <div className="flexRow center-content">
        {article.author}
        <span className="spacer" />
        {article.date}
      </div>
    </div>
  );
}

//Will need to create access to generate articles on the backend.
//Need to track how many articles get rendered at a time before Home.jsx creates additional pages to flip through.
//Do I preset a backend for this? I probably should.

//Check if Link works. Also will need routes for this.