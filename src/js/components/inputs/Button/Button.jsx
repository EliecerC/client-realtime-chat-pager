import React from 'react';
import clx from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';

function Button(props) {
  const { className, ...rest } = props;

  return (
    <button
      className={clx('button-root', className)}
      {...rest}
    />
  );
}

Button.propTypes = {
  className: PropTypes.string
};

export default Button;
