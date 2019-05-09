import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./Movies.css";

import MovieCard from "./MovieCard";

const Movies = ({ movies, addToQueue }) => (
  <Fragment>
    <h1>Available Movies</h1>
    <ul className="movie__list">
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieCard {...movie} addToQueue={addToQueue} />
        </li>
      ))}
    </ul>
  </Fragment>
);

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      poster: PropTypes.string,
      releaseDate: PropTypes.string
    })
  )
};

Movies.defaultProps = {
  movies: []
};

export default Movies;
