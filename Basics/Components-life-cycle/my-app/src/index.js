import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

setTimeout(() => {
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}, 10000)
