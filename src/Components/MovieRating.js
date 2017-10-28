'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const STAR_RATING_WIDTH = 140; // Width in pixels of star rating guage

const MovieRating = (props) => {
  const { score } = props;
  const scoreDecimal = (score * 10).toFixed(1);
  const ratingWidth = STAR_RATING_WIDTH * score;

  return (
    <div
      className="rating rating-list"
      title={`Users rated this ${scoreDecimal}/10 - click stars to rate`}
    >
      <span className="rating-bg">&nbsp;</span>
      <span
        className="rating-imdb"
        style={{ width: ratingWidth }}
      >
        &nbsp;
      </span>
      <span className="rating-stars">
        {
          Array(...[Array(10)]).map((item, i) => (
            <a
              href="/register/login?why=vote"
              key={i} // eslint-disable-line react/no-array-index-key
              rel="nofollow"
              title="Register or login to rate this title"
            >
              <span>{i + 1}</span>
            </a>
          ))
        }
      </span>
      <span className="rating-rating">
        <span className="value">
          {scoreDecimal}
        </span>
        <span className="grey">/</span>
        <span className="grey">10</span>
      </span>
      <span className="rating-cancel">
        <a href="/unknown" title="Delete" rel="nofollow">
          <span>X</span>
        </a>
      </span>
    </div>
  );
};

MovieRating.propTypes = {
  score: PropTypes.number.isRequired,
};

export default MovieRating;
