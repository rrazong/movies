'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MovieRating from './MovieRating';

const MovieListItem = (props) => {
  const {
    'cover-url': coverUrl,
    'runtime-in-minutes': runtimeInMinutes,
    actors,
    className,
    director,
    id,
    score,
    synopsis,
    title,
    url,
    year,
  } = props;

  return (
    <div
      className={classnames('list_item', className)}
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
        <MovieRating score={score} />
        {
          synopsis &&
          <Synopsis
            synopsis={synopsis}
            runtimeInMinutes={runtimeInMinutes}
          />
        }
        { director &&
          <div className="secondary">
            Director:
            &nbsp;
            <a href="/unknown">{director}</a>
          </div>
        }
        {
          actors.length > 0 &&
          <Actors actors={actors} />
        }
      </div>
      <div className="clear">&nbsp;</div>
    </div>
  );
};

const Synopsis = ({ numberOfSentences, runtimeInMinutes, synopsis }) => {
  const sentenceArray = synopsis.split('. ');
  const sentences = sentenceArray.length === 1
    ? sentenceArray[0]
    : `${sentenceArray.slice(0, numberOfSentences).join('. ')}.`;

  return (
    <div className="item_description">
      <span>
        {sentences}
      </span>
      { runtimeInMinutes &&
        <span>
          &nbsp;
          <span>
            ({runtimeInMinutes} mins.)
          </span>
        </span>
      }
    </div>
  );
};

Synopsis.propTypes = {
  numberOfSentences: PropTypes.number,
  runtimeInMinutes: PropTypes.number,
  synopsis: PropTypes.string,
};

Synopsis.defaultProps = {
  numberOfSentences: 1,
  runtimeInMinutes: 0,
  synopsis: '',
};

const Actors = ({ actors }) => (
  <div className="secondary">
    Stars:
    &nbsp;
    {
      actors.map((actor, index, arr) => (
        <span key={actor.name}>
          <a href={actor.url}>{actor.name}</a>{index + 1 < arr.length ? ', ' : ''}
        </span>
      ))
    }
  </div>
);

Actors.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};

Actors.defaultProps = {
  actors: [],
};

MovieListItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  'cover-url': PropTypes.string,
  director: PropTypes.string,
  'runtime-in-minutes': PropTypes.number,
  actors: Actors.propTypes.actors,
  synopsis: PropTypes.string,
  year: PropTypes.number,
};

MovieListItem.defaultProps = {
  'cover-url': '',
  className: '',
  director: '',
  'runtime-in-minutes': 0,
  actors: [],
  synopsis: '',
  year: 0,
};

export default MovieListItem;
