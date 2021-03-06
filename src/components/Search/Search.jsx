import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './Search.scss';
import { ENTER_KEY } from '../../utils/consts';

const searchItems = [
  {
    text: 'title',
    field: 'title',
  },
  {
    text: 'genre',
    field: 'genres',
  },
];

class Search extends React.Component {
  state = {
    word: '',
    searchBy: 'title',
    navigationTitle: 'title',
  }

  componentDidMount() {
    const {
      location,
      match,
      history,
      fetchFilmByRoute,
    } = this.props;
    document.addEventListener('keypress', this.onSubmitHandler);
    fetchFilmByRoute(location, match, history);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onSubmitHandler);
  }

  onSubmitHandler = (e) => {
    if (e.keyCode === ENTER_KEY) {
      this.onClickHandler();
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      word: e.target.value,
    });
  }

  onClickHandler = () => {
    const { word, searchBy, navigationTitle } = this.state;
    const { searchFilm, history } = this.props;
    const searchWord = word.toLowerCase();
    this.setState({
      word: '',
    });
    searchFilm({ word: searchWord, searchBy, navigationTitle });
    history.push(`/search?q=${searchWord}&t=${searchBy}`);
  };

  onSearchByHandler = (e) => {
    this.setState({
      searchBy: e.target.dataset.attr,
      navigationTitle: searchItems.find(el => el.field === e.target.dataset.attr).text,
    });
  }

  render() {
    const { word, searchBy } = this.state;
    return (
      <div className={styles.searchWrapper}>
        <p className={styles.searchText}>find your movie</p>
        <input
          type="text"
          className={styles.search}
          placeholder="search film"
          value={word}
          onChange={this.onChangeHandler}
        />
        <div className={styles.buttonsWrapper}>
          <div className={styles.btnWrapper}>
            <h3 className={styles.searchTitle}>SEARCH BY</h3>
            {
              searchItems.map(item => (
                <Button
                  key={item.text}
                  type={searchBy === item.field ? 'red' : 'black'}
                  text={item.text}
                  dataAttr={item.field}
                  onClick={this.onSearchByHandler}
                />
              ))
            }
          </div>
          <Button
            type="red"
            text="SEARCH"
            isMain
            onClick={this.onClickHandler}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchFilm: PropTypes.func.isRequired,
  fetchFilmByRoute: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Search;
