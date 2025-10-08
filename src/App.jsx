import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Product from './Pages/product';
import ProjectReference from './Pages/project_reference';
import NewArticle from './Pages/new_article';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/projects-reference" element={<ProjectReference />} />
        <Route path="/news-article" element={<NewArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
