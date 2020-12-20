import React from "react";
import './MovieDetails.css'

export default function movieDetails({ movies }) {
  return (
    <div className="movies-container">
      <table id="movies-table">
        <thead>
          <tr>
            <td> ID </td>
            <td> Film Adı </td>
            <td> Kategori </td>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr>
              <td> {movie.id}</td>
              <td> {movie.title} </td>
              <td> {movie.description} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
