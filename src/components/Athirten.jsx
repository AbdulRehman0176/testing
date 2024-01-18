import React, { useState } from 'react';

const Athirten = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password === confirmPassword) {
      // Passwords match, you can proceed with further actions (e.g., signup)
      console.log('Signup successful!');
      console.log('Username:', username);
      console.log('Password:', password);
    } else {
      // Passwords do not match, set an error or handle accordingly
      setPasswordsMatch(false);
      console.log('Passwords do not match');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </label>
      <br />
      {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
      <br />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Athirten;
