import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Index.css'
import {BrowserRouter} from 'react-router'
import store from './store/index'
import {Provider} from 'react-redux'

ReactDOM.render(<Provider><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
