import { useParams } from 'react-router-dom';
import {Articles} from '';

export default function RenderArticle() {
  const { title } = useParams();
  const post = Articles.find(c => c.slug === title);
  const decodedName = decodeURIComponent(title);

  if (!Articles) return <h2>Article information "{decodedName}" not found.</h2>;

  return (
    <div>
      <div className="flexColumn">
        <h1>{post.title}</h1>
      </div>
      <div className="flexRow">
        <img src={post.thumbnail} alt={post.title} />
        <p>{post.content}</p>
      </div>
      <div className="flexRow">
        {post.author}
        {post.date}
      </div>
    </div>
  );
}

//Will need to create access to generate articles on the backend.
//Need to track how many articles get rendered at a time before Home.jsx creates additional pages to flip through.
//Do I preset a backend for this? I probably should.
