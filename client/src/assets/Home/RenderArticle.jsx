import { useParams } from 'react-router-dom';
import {articles} from '';

function Home() {
  const { title } = useParams();
  const article = articles.find(c => c.slug === title);
  const decodedName = decodeURIComponent(title);

  if (!articles) return <h2>Article "{decodedName}" not found.</h2>;

  return (
    <div>
      <div className="flexColumn">
        <h1>{article.title}</h1>
      </div>
      <div className="flexRow">
        <p>{article.content}</p>
        <img src={article.thumbnail} alt={article.title} />
      </div>
      <div className="flexRow">
        {article.author}
        {article.date}
      </div>
    </div>
  );
}

export default Home;

//Will need to create access to generate articles on the backend.
//Need to track how many articles get rendered at a time before Home.jsx creates additional pages to flip through.
