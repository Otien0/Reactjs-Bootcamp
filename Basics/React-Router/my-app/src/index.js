import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import BlogSingle from './BlogSingle';
import './index.css';
import {Route, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={App} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/blog' component={Blog} />
      <div>
        <Route path='/blog/:postId' component={BlogSingle} />
      </div>
    </div>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
