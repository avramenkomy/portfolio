import React from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

function ProjectCard ({ project_info }) {
  
  return (
    <Link to={`${project_info.url}`}>
      <div className="project__card">
        <p>{project_info.title}</p>
      </div>
    </Link>
  )
}

ProjectCard.propTypes = {
  project_info: propTypes.object,
}

export default ProjectCard;
