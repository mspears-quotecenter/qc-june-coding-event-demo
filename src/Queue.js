import React, { Fragment } from "react";
import PropTypes from "prop-types";
// TODO:
// Fill out the list item card with Title, Image, year
// Create a button that will remove a movie from the queue
// create a button that will clear the queue

const Queue = ({ queue, removeFromQueue }) => (
  <Fragment>
    <h1>Queue</h1>
    <ul>
      {queue.map(({ id, movieId }) => (
        <li key={id}>
          <div>
            {id}-{movieId}
            <button className="button">-</button>
          </div>
        </li>
      ))}
    </ul>
  </Fragment>
);

Queue.propTypes = {
  queue: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      movieId: PropTypes.number
    })
  )
};

Queue.defaultProps = {
  queue: []
};

export default Queue;
