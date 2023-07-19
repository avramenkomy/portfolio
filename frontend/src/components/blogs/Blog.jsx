import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import BlogFilter from './BlogFilter';

function Blogs() {
  const [content, setContent] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const blogQuery = searchParams.get('blogTitle') || '';
  const latest = searchParams.has('latest');

  const startFrom = latest ? 90 : 1;


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setContent(json))
  }, []);

  return (
    <div>
      <h2>
        This Blogs component!!!
      </h2>
      <BlogFilter blogQuery={blogQuery} latest={latest} setSearchParams={setSearchParams}/>
      <Link to={'/blog/create'}>Create a new Post</Link>
      {
        content.filter(item => item.title.includes(blogQuery) && item.id >= startFrom).map(item => (
          <Link key={item.id} to={`/blog/${item.id}`}>
            <li>{item.title}</li>
          </Link>
        ))
      }      
    </div>
  )
}

export default Blogs;
