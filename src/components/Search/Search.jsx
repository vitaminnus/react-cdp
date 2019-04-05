import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './Search.scss';

const searchItems = [
  {
    text: 'title',
    type: 'red',
  },
  {
    text: 'genre',
    type: 'black',
  },
];

class Search extends React.Component {
  state = {
    searchedWord: '',
  }

  onChangeHandler = (e) => {
    this.setState({
      searchedWord: e.target.value,
    });
  }

  onClickHandler = () => {
    const { saveSearchingWord, searchFilm } = this.props;
    const { searchedWord } = this.state;
    saveSearchingWord(searchedWord);
    searchFilm(searchedWord);
  }

  render() {
    const { searchedWord } = this.props;
    return (
      <div className={styles.searchWrapper}>
        <p className={styles.searchText}>find your movie</p>
        <input
          type="text"
          className={styles.search}
          placeholder="search film"
          value={searchedWord}
          onChange={this.onChangeHandler}
        />
        <div className={styles.buttonsWrapper}>
          <div className={styles.btnWrapper}>
            <h3 className={styles.searchTitle}>SEARCH BY</h3>
            {
              searchItems.map(item => (
                <Button
                  key={item.text}
                  type={item.type}
                  text={item.text}
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
  searchedWord: PropTypes.string.isRequired,
  saveSearchingWord: PropTypes.func.isRequired,
};

export default Search;
