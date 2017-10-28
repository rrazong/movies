'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem';

const MovieList = props => (
  <div className="listo">
    <div className="list detail">
      {
        props.list.movies.map(info => (
          <MovieListItem
            {...info}
            key={info.id}
          />
        ))
      }
    </div>
  </div>
);

MovieList.propTypes = {
  list: PropTypes.shape({
    reviews: PropTypes.array,
    movies: PropTypes.array.isRequired,
  }).isRequired,
};

export default MovieList;
