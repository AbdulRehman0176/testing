import React, { useState, useEffect } from 'react';

const Atwelve = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    setIsValidEmail(emailRegex.test(email));
  }, [email]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the valid email (e.g., submit the form)
    if (isValidEmail) {
      console.log('Valid email:', email);
      // Add your logic here, like submitting the form or making an API call
    } else {
      console.log('Invalid email format');
      // Display an error message or handle invalid email format
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      {!isValidEmail && <p style={{ color: 'red' }}>Invalid email format</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Atwelve;
