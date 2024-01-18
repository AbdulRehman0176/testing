import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';

const Afiften = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // yahan py err0r ms khm krne k liye ...
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (!/^\d+$/.test(formData.age)) {
      newErrors.age = 'Age must be numeric';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Registration successful:', formData);
    // form data set ya reset  krnr k liye 
    setFormData({
      username: '',
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div style={{backgroundColor:'gold',color:'black',textAlign:'center',boxShadow:'5px 5px 5px red',height:'300px',width:'450px',marginBottom:'20px',marginLeft:'40px'}}>
    <form onSubmit={handleSubmit}>
      <div style={{marginTop:'20px'}}> 
        <label style={{marginTop:'40px'}}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <span>{errors.username}</span>
      </div>

      <div>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <span>{errors.email}</span>
      </div>

      <div>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <span>{errors.age}</span>
      </div>

      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <span>{errors.password}</span>
      </div>

      <div>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <span>{errors.confirmPassword}</span>
      </div>

      <button style={{marginTop:'20px',color:'white',backgroundColor:'black'}} type="submit">Register</button>
    </form>
    </div>
  );
};

export default Afiften;
