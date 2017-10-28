'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const STAR_RATING_WIDTH = 140; // Width in pixels of star rating guage

const MovieListItem = (props) => {
  const {
    'cover-url': coverUrl,
    'runtime-in-minutes': runtimeInMinutes,
    actors,
    director,
    id,
    score,
    synopsis,
    title,
    url,
    year,
  } = props;
  const oddOrEven = 'odd';
  const scoreDecimal = (score * 10).toFixed(1);
  const ratingWidth = STAR_RATING_WIDTH * score;

  console.log(props);
  return (
    <div
      className={classnames('list_item', oddOrEven)}
    >
      <div className="image">
        <a href={url}>
          <div className="hover-over-image zero-z-index">
            <img
              alt={`Movie poster of ${title}`}
              className="zero-z-index movieListItem-poster-image"
              src={coverUrl}
            />
          </div>
        </a>
      </div>
      <div className="number">
        {id}
        .
      </div>
      <div className="info">
        <b>
          <a href={url}>{title}</a>
          { year &&
            <span>
              &nbsp;
              <span className="year_type">
                ({year})
              </span>
            </span>
          }
        </b>
        <div
          className="rating rating-list"
          title={`Users rated this ${scoreDecimal}/10 - click stars to rate`}
        >
          <span className="rating-bg">&nbsp;</span>
          <span className="rating-imdb" style={{ width: ratingWidth }}>&nbsp;</span>
          <span className="rating-stars">
            {
              Array(...[Array(10)]).map((item, i) => (
                <a
                  href="/register/login?why=vote"
                  rel="nofollow"
                  title="Register or login to rate this title"
                >
                  <span>{i + 1}</span>
                </a>
              ))
            }
          </span>
          <span className="rating-rating">
            <span className="value">{scoreDecimal}</span>
            <span className="grey">/</span>
            <span className="grey">10</span>
          </span>
          <span className="rating-cancel">
            <a href="/unknown" title="Delete" rel="nofollow">
              <span>X</span>
            </a>
          </span>
        </div>
        { synopsis &&
          <div className="item_description">
            {synopsis}
            { runtimeInMinutes &&
              <span>
                &nbsp;
                <span>
                  ({runtimeInMinutes} mins.)
                </span>
              </span>
            }
          </div>
        }
        { director &&
          <div className="secondary">
            Director:
            &nbsp;
            <a href="/unknown">{director}</a>
          </div>
        }
        {
          actors &&
          <div className="secondary">
            Stars:
            &nbsp;
            {
              actors.map((actor, i, arr) => (
                <span>
                  <a href={actor.url}>{actor.name}</a>{i + 1 < arr.length ? ', ' : ''}
                </span>
              ))
            }
          </div>
        }
      </div>
      <div className="clear">&nbsp;</div>
    </div>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  'cover-url': PropTypes.string,
  director: PropTypes.string,
  'runtime-in-minutes': PropTypes.number,
  actors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
  synopsis: PropTypes.string,
  year: PropTypes.number,
};

MovieListItem.defaultProps = {
  'cover-url': '',
  director: '',
  'runtime-in-minutes': 0,
  actors: [],
  synopsis: '',
  year: 0,
};


export default MovieListItem;
