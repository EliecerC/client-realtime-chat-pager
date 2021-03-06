import React from 'react';
// components
import Button from 'Components/inputs/Button/Button.jsx';
import TextInput from 'Components/inputs/TextInput/TextInput.jsx';
// context
import AuthContext from 'Lib/context/auth/auth-context';
// custom hooks
import useInput from 'Lib/hooks/useInput';

const Login = () => {
  const { handleLogin, isAuthenticating } = React.useContext(AuthContext);
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
        <TextInput
          required
          autoFocus
          id="username"
          placeholder="username"
          className="font-size-14 font-weight-regular margin-top-4 margin-bottom-40"
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
};

export default Login;
