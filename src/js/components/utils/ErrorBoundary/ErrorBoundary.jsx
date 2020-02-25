import React from 'react';
import PropTypes from 'prop-types';

import EmptyPage from 'Components/utils/EmptyPage/EmptyPage.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.handleContactSupport.bind(this);

    this.state = { error: false };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  handleContactSupport(e) {
    e.preventDefault();

    // eslint-disable-next-line no-alert
    alert('Go to Pager website and contact our support.');
  }

  render() {
    return this.state.error ?
      (
        <EmptyPage
          title="Something went wrong, try again later."
          button={
            <button onClick={this.handleContactSupport}>
              Contact Support
            </button>
          }
        />
      ) : (
        this.props.children
      );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element
};

export default ErrorBoundary;
