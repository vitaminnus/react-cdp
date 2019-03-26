import React from 'react';
import PropTypes from 'prop-types';
import styles from './ViewInfoButton.scss';
import Button from '../Button';

class ViewInfoButton extends React.Component {
  state = {
    isClickInfo: false,
  };

  onClickHandler = () => {
    const { isClickInfo } = this.state;
    this.setState({
      isClickInfo: !isClickInfo,
    });
    if (!isClickInfo) {
      global.document.addEventListener('click', this.addListenClicks);
    } else {
      global.document.removeEventListener('click', this.addListenClicks);
    }
  }

  addListenClicks = (e) => {
    if (!(e.target.classList.contains(styles['show-text-block']) || e.target.classList.contains(styles['show-text']))) {
      this.setState({
        isClickInfo: false,
      });
      global.document.removeEventListener('click', this.addListenClicks);
    }
  }

  render() {
    const { filmDescription } = this.props;
    const { isClickInfo } = this.state;
    return (
      <div className={styles.container}>
        { isClickInfo && (
          <div className={styles['show-text-block']}>
            <p className={styles['show-text']}>{filmDescription}</p>
          </div>
        )}
        <Button type="black" text="View Info" onClick={this.onClickHandler} />
      </div>
    );
  }
}

ViewInfoButton.propTypes = {
  filmDescription: PropTypes.string.isRequired,
};

export default ViewInfoButton;
