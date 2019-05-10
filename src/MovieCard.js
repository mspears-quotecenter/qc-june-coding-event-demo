import React from "react";
import PropTypes from "prop-types";

import "./MovieCard.css";

const MovieCard = ({ id, title, releaseDate, poster, addToQueue }) => (
  <div className="card">
    <img src={poster} alt={`${title}-poster`} />
    <div>
      <div className="card__info">
        <div className="card__title">{title}</div>
        <div className="card__date">{releaseDate}</div>
      </div>
      <button className="button" onClick={() => addToQueue(id)}>
        +
      </button>
    </div>
  </div>
);

MovieCard.propTypes = {
  movieId: PropTypes.number,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  poster: PropTypes.string,
  addToQueue: PropTypes.func
};

export default MovieCard;
