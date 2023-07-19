import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';


function BlogPage() {
  const {id} = useParams();
  const navigate = useNavigate();
  // console.log(useParams());

  const [content, setContent] = useState(null);

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => setContent(json))
  }, [id]);

  return (
    <div>
      {content
        ? <h2>{content.title}</h2>
        : <h2>...Загрузка</h2>
      }
      <button onClick={goBack}>Go Back</button>
      <Link to={`/blog/edit/${id}`}>Edit this post</Link>
    </div>
  )
}

export default BlogPage;
