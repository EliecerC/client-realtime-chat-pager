import React from 'react';
import PropTypes from 'prop-types';
import './EmptyPage.scss';

function EmptyPage(props) {
  const { title, description, button } = props;

  return (
    <div className="empty-page-container">
      {title &&
        <div className="title">
          {title}
        </div>}

      {description &&
        <div className="description">
          {description}
        </div>}

      {button &&
        <div className="button">
          {button}
        </div>}
    </div>
  );
}

EmptyPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.element
};

export default EmptyPage;
