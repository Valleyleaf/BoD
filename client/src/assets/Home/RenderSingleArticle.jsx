import { useParams } from 'react-router-dom';
import {Articles} from '../Info/Articles/Articles.js';
import './renderArticle.css';

export default function RenderSingleArticle({ article }) {
    const { name } = useParams();
    const character = Characters.find(c => c.slug === name);
    const decodedName = decodeURIComponent(name);
    //Add slug function.
  if (!article) return <h2>Article {article.slug} not found.</h2>;

  return (
    <div>
      <div className="flexColumn">
        <h1>{article.title}</h1>
      </div>
      <div className="flexRow">
        <img className="" src={article.thumbnail} alt={article.title} />
        <div className="">
            <p>{article.content}</p>
        </div>
      </div>
      <div className="flexRow center-content">
        {article.author}
        <span className="spacer" />
        {article.date}
      </div>
    </div>
  );
}

//Add Back Button.