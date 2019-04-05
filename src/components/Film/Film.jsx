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
    const container = this.myRef.current;
    container.addEventListener('click', this.onClickHandler);
  }

  componentWillUnmount() {
    const { onClick } = this.props;
    const container = this.myRef.current;
    container.removeEventListener('click', onClick);
  }

  onClickHandler = () => {
    const { onClick, film } = this.props;
    onClick(film);
  }

  render() {
    const {
      film: {
        title,
        poster_path: posterPath,
        genres,
        release_date: releaseDate,
      },
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
            name={title}
            genres={genres}
            year={releaseDate}
          />
        </div>
      </div>
    );
  }
}

Film.propTypes = {
  film: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    posterPath: PropTypes.string,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Film;
