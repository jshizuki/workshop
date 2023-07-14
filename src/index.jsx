/* eslint-disable no-unused-vars */
import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';

import '../assets/stylesheets/application.scss';

import App from './components/app';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
