import React from 'react';
import { useParams } from 'react-router-dom';


function EditPost() {
  const {id} = useParams();

  return (
    <h2>Edit post with id={id}</h2>
  )
}

export default EditPost;
