import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.scss';

const links = {
  'release date': ['release_date', 'releaseDateSort'],
  rating: ['vote_count', 'voteCountSort'],
};

class Navigation extends React.Component {
  state = {
    releaseDateSort: 'DESC',
    voteCountSort: 'DESC',
  }

  onClickHandler = (e) => {
    const { releaseDateSort, voteCountSort } = this.state;
    const { sortFilms } = this.props;
    if (e.target.dataset.sorttype === 'release_date') {
      this.setState({
        releaseDateSort: releaseDateSort === 'ASC' ? 'DESC' : 'ASC',
      });
      sortFilms({
        key: 'release_date',
        direction: releaseDateSort === 'DESC' ? 1 : -1,
      });
    } else {
      this.setState({
        voteCountSort: voteCountSort === 'ASC' ? 'DESC' : 'ASC',
      });
      sortFilms({
        key: 'vote_count',
        direction: voteCountSort === 'DESC' ? 1 : -1,
      });
    }
  }

  render() {
    const { films, searchingWord, typeOfSearch } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h3 className={styles.foundTitle}>{searchingWord && `${films.length} movies found by "${searchingWord}" ${typeOfSearch}`}</h3>
          <nav className={styles['nav-links']}>
            <h3 className={styles.sortTitle}>Sort by</h3>
            {Object.keys(links).map(keylink => (
              <button
                key={keylink}
                type="button"
                data-sorttype={links[keylink][0]}
                className={`${styles.link} ${this.state[links[keylink][1]] === 'DESC' ? styles.up : styles.down}`} // eslint-disable-line react/destructuring-assignment
                onClick={this.onClickHandler}
              >
                {keylink}
              </button>
            ))}
          </nav>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortFilms: PropTypes.func.isRequired,
  searchingWord: PropTypes.string.isRequired,
  typeOfSearch: PropTypes.string.isRequired,
};


export default Navigation;
