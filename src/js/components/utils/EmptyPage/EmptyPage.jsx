import React from 'react';
import PropTypes from 'prop-types';
import styles from './empty-page.scss';

function EmptyState(props) {
  const { title, description, button } = props;

  return (
    <div className={styles.root}>
      {title &&
        <div className={styles.title}>
          {title}
        </div>}

      {description &&
        <div className={styles.description}>
          {description}
        </div>}

      {button &&
        <div className={styles.button}>
          {button}
        </div>}
    </div>
  );
}

EmptyState.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.element
};

export default EmptyState;
