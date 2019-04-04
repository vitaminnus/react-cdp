import React from 'react';
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

const Search = () => (
  <div className={styles.searchWrapper}>
    <p className={styles.searchText}>find your movie</p>
    <input type="text" className={styles.search} placeholder="search film" />
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
      />
    </div>
  </div>
);

export default Search;
