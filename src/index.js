import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import pg from 'pg';
import express from 'express';

var app = express();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
