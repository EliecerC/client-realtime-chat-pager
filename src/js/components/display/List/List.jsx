import React from 'react';
import PropTypes from 'prop-types';
import clx from 'classnames';
import styles from './list.scss';

function List(props) {
  const { className, ...rest } = props;

  return (
    <ul
      className={clx(styles.list, className)}
      {...rest}
    />
  );
}

List.propTypes = {
  className: PropTypes.string
};

export default List;
