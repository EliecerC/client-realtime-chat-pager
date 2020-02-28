import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';

const Loader = (props) => {
  const { delay = 0 } = props;
  const [ready, setReady] = React.useState(delay === 0);

  React.useEffect(() => {
    let timeout = null;

    if (!ready) {
      timeout = setTimeout(() => setReady(true), delay);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  if (!ready) return null;

  // TO DO: add icon and animation to loader
  return (
    <div className="loader-container">
      <h1 className="font-size-14">
        Loading...
      </h1>
    </div>
  );
};

Loader.propTypes = {
  delay: PropTypes.number
};

export default Loader;
