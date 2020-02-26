import React from 'react';
import clx from 'classnames';
import PropTypes from 'prop-types';
import styles from './text-input.scss';

function TextInput(props) {
  const { className, onChange, ...rest } = props;
  const [value, setValue] = React.useState('');

  const handleChange = e => {
    e.persist();

    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <input
      value={value}
      className={clx(className, styles.input)}
      {...rest}
      type="text"
      onChange={handleChange}
    />
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;
