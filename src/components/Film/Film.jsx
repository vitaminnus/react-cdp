import React from 'react';
import PropTypes from 'prop-types';
import styles from './Film.scss';
import FilmInfo from '../FilmInfo';
import defaultPoster from '../../assets/images/default-poster.jpg';

class Film extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const { onClick } = this.props;
    const container = this.myRef.current;
    container.addEventListener('click', onClick);
  }

  componentWillUnmount() {
    const { onClick } = this.props;
    const container = this.myRef.current;
    container.removeEventListener('click', onClick);
  }

  render() {
    const {
      name,
      posterPath,
      genres,
      year,
    } = this.props;
    const posterURL = posterPath || defaultPoster;
    return (
      <div id="film" className={styles.container} ref={this.myRef}>
        <div className={styles.wrapper}>
          <div
            className={styles.poster}
            style={{
              backgroundImage: `url(${posterURL})`,
            }}
          />
          <FilmInfo
            name={name}
            genres={genres}
            year={year}
          />
        </div>
      </div>
    );
  }
}

Film.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  posterPath: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
Film.defaultProps = {
  posterPath: null,
};

export default Film;
