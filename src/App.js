import React from 'react';
import './App.css';
import Header from './components/Header';
import Posts from './containers/Posts';

const App = () => (
  <div className="app">
    <Header />
    <Posts />
  </div>
);

export default App;
