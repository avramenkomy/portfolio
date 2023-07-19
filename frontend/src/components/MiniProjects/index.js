import React, { useState, useEffect } from 'react';

import { GeneralApi } from '../../modules/FakeApi';

import ProjectCard from './ProjectCard';

import './index.css';


function MiniProjects () {
  const [content, setContent] = useState([]);

  useEffect(() => {
    updatePage();
  }, []);

  function updatePage () {
    GeneralApi.getProjectsList().then(response => {
      if (response.status === 200) {
        setContent(response.data);
      }
    });
  }

  return (
    <React.Fragment>
      <h2>Mini projects</h2>
      <p>This is page with some mini projects</p>

      <div className="projects__list">
        {content.map(project => {
          return <ProjectCard key={project.id} project_info={project} />
        })}
      </div>

      {content.length === 0 && <p>Проектов пока нет</p>}
    </React.Fragment>
  )
}

export default MiniProjects;
