import React from 'react';
import './App.css';
import movies from './movies';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="container">
        <MovieDetails movies={movies}/>
    </div>
  );
}

export default App;
