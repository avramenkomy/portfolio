import React, { useState } from 'react';


function BlogFilter({ blogQuery, latest, setSearchParams}) {
  const [search, setSearch] = useState(blogQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};
    if (query.length) params.blogTitle = query;
    if (isLatest) params.latest = true;
  
    setSearchParams(params);
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="search" name="search" value={search} onChange={(event) => setSearch(event.target.value)}/>
      <label style={{ padding: '0 1rem'}}>
        <input type="checkbox" name="latest" checked={checked} onChange={event => setChecked(event.target.checked)} />
        New only
      </label>
      <input type="submit" value="search" />
    </form>
  )
}

export default BlogFilter;