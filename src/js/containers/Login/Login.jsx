import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/inputs/Button/Button.jsx';
import useInput from '../../lib/hooks/useInput';

function Login(props) {
  const {
    handleLogin,
    isAuthenticating
  } = props;
  const { value: username, inputProps: usernameProps } = useInput('');

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();
    if (username) {
      handleLogin(username);
    }
  }, [username, handleLogin]);

  return (
    <div className="box padding-40">
      <h1 className="font-size-34 font-weight-regular margin-bottom-40">
        Join Chat
      </h1>
      <form className="margin-bottom-40" onSubmit={handleSubmit}>
        <label
          htmlFor="username"
          className="input-label font-weight-bold font-size-14"
        >
          Please enter your username
        </label>
        <br />
        <input
          required
          type="text"
          id="username"
          placeholder="username"
          className="text-input font-size-14 font-weight-regular margin-top-4 margin-bottom-40"
          disabled={isAuthenticating}
          {...usernameProps}
        />
        <br />
        <Button className="float-right" disabled={isAuthenticating}>
          Next
        </Button>
      </form>
    </div>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func,
  isAuthenticating: PropTypes.bool
};

export default Login;

