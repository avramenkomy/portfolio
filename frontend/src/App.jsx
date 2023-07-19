import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import {
  NotFound, Home, About,
  Skills, Blog,
  Contacts, Resume, Test, Projects,
} from './components';

import TodosApp from './components/MiniProjects/Todos';

import AuthProvider from './components/hoc/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/todos" element={<TodosApp />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact-me" element={<Contacts />} />
          <Route path="resume" element={<Resume />} />
        </Route>
        {/** FIXME: test router for develop */}
        <Route path="test" element={<Test />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
