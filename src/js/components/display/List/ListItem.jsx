import React from 'react';
import PropTypes from 'prop-types';
import clx from 'classnames';
import styles from './list.scss';

function ListItem(props) {
  const { className, ...rest } = props;

  return (
    <li
      className={clx(styles.listItem, className)}
      {...rest}
    />
  );
}

ListItem.propTypes = {
  className: PropTypes.string
};

export default ListItem;
