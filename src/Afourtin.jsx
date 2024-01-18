import React, { useState } from 'react';

const Afourtin = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const allowedPasswords = ['abc', 'abdulrehman', '123']; // Replace with your predefined passwords

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered password is in the allowed passwords array
    if (allowedPasswords.includes(password)) {
      setMessage('Password is correct. Login successful!');
    } else {
      setMessage('Incorrect password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {message && <p style={{ color: message.includes('correct') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
};

export default Afourtin;
