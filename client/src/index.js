import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const RESTAURANTS = [
  {"name":"Scarpetta","city":"New York","comment":["loved it", "saw Bethany!"],"name of housewife":"Bethany"},
  {"name":"Old Lady Gang","city":"Atlanta","comment":["great food!"],"name of housewife":"Porscha"},
  {"name":"Sur","city":"0.9KB","Beverly Hills":["Tom and Tom were there"],"name of housewife":"Lisa"},
  {"name":"The Brownstone","city":"New Jersey","comment":["Had the steak", 'Albie was there'],"name of housewife":"Melissa"},
];

ReactDOM.render(<BrowserRouter>
    <App restaurants={RESTAURANTS}/>
  </BrowserRouter>, document.getElementById('root'));

