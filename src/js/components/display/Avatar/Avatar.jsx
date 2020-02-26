import React from 'react';
import PropTypes from 'prop-types';
import clx from 'classnames';
import styles from './avatar.scss';

import { getAvatarUrl } from '../../../lib/helpers';

function Avatar(props) {
  // eslint-disable-next-line max-len
  const { size, name, color, length, fontSize, className, background, rounded, uppercase, bold, ...rest } = props;
  const avatar = React.useMemo(() => {
    return getAvatarUrl({
      name, size, color, background, length, 'font-size': fontSize, rounded, uppercase, bold
    });
  }, [name, size, color, background, length, fontSize, rounded, uppercase, bold]);

  return (
    <figure
      style={{
        height: `${size}px`,
        width: `${size}px`
      }}
      className={clx(styles.avatar, className)}
      {...rest}
    >
      <img src={avatar} alt={name} />
    </figure>
  );
}

Avatar.defaultProps = {
  size: 40,
  color: '0f0f0f',
  background: 'eee',
  length: 2,
  fontSize: 0.4,
  rounded: false,
  uppercase: true,
  bold: false
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  background: PropTypes.string,
  color: PropTypes.string,
  length: PropTypes.number,
  fontSize: PropTypes.number,
  rounded: PropTypes.bool,
  uppercase: PropTypes.bool,
  bold: PropTypes.bool,

  className: PropTypes.string
};

export default Avatar;
