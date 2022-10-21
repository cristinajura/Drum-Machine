import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import DrumMachine from './DrumMachine';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>
);

