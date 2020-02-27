import React from 'react';
import PropTypes from 'prop-types';
import clx from 'classnames';
import './List.scss';

function List(props) {
  const { className, ...rest } = props;

  return (
    <ul
      className={clx('list-root', className)}
      {...rest}
    />
  );
}

List.propTypes = {
  className: PropTypes.string
};

function ListItem(props) {
  const { className, ...rest } = props;

  return (
    <li
      className={clx('list-item', className)}
      {...rest}
    />
  );
}

ListItem.propTypes = {
  className: PropTypes.string
};

export default List;

export { ListItem };
