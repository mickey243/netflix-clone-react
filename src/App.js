import React from 'react';
import './App.css';
import HomePage from './comonent/HomePage';

function App() {
  document.title = "Netflix india - Watch TV Shows Online, Watch Trailer Online";
  return (
    <div className="app">
      <HomePage />
    </div>
  );
}

export default App;
