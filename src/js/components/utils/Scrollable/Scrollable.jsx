import React from 'react';
import PropTypes from 'prop-types';
import clx from 'classnames';
// styles
import './Scrollable.scss';

const Scrollable = React.forwardRef((props, ref) => {
  const { style, className, overflowX, overflowY, maxHeight, ...rest } = props;

  return (
    <div
      ref={ref}
      style={{
        maxHeight,
        overflowX,
        overflowY,
        ...style
      }}
      className={clx('scrollable-root', className)}
      {...rest}
    />
  );
});

Scrollable.displayName = 'Scrollable';

Scrollable.defaultProps = {
  className: '',
  overflowY: 'scroll',
  overflowX: 'hidden',
  maxHeight: '100%',
  style: {}
};

Scrollable.propTypes = {
  style: PropTypes.object,
  maxHeight: PropTypes.string,
  className: PropTypes.string,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string
};

export default Scrollable;
