import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieInfo.scss';
import Film from '../Film';

class MovieInfo extends React.Component {
  // componentDidMount() {
  //   const {
  //     match,
  //     location,
  //     history, 
  //     fetchFilmByRoute,
  //   } = this.props;
  //   fetchFilmByRoute(location, match, history);
  // }

  render() {
    const { films } = this.props;
    return (
      <div className={styles.list}>
        {films && films.map(film => (
          <Film
            key={film.id}
            film={film}
          />
        ))}
      </div>
    );
  }
}

MovieInfo.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieInfo;
