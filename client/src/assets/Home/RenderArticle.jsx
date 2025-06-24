import { useParams } from 'react-router-dom';
import {Articles} from '../Info/Articles/Articles.js';
//Above is temporary import for testing purposes. Replace with backend import when ready.

export default function RenderArticle() {
  const { title } = useParams();
  const post = Articles.find(c => c.slug === title);
  //Above will throw error if no Articles exist.
  const decodedName = decodeURIComponent(title);

  if (!post) return <h2>Article information "{decodedName}" not found.</h2>;
  //If no post is found, return an error message.
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
        {/* Add separator here. */}
        {post.date}
      </div>
    </div>
  );
}

//Will need to create access to generate articles on the backend.
//Need to track how many articles get rendered at a time before Home.jsx creates additional pages to flip through.
//Do I preset a backend for this? I probably should.
