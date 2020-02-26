import React from 'react';
import clx from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.scss';

function Button(props) {
  const { className, ...rest } = props;

  return (
    <button
      className={clx(styles.button, className)}
      {...rest}
    />
  );
}

Button.propTypes = {
  className: PropTypes.string
};

export default Button;
