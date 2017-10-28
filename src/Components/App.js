'use strict';

import React from 'react';
import MovieList from './MovieList';
import list from '../data.json';
import './App.css';

const App = () => (
  <div className="page">
    <MovieList list={list} />
  </div>
);

export default App;
