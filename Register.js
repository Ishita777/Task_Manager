import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const { register } = useContext(AuthContext);
  const history = useHistory();

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(user);
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Register</h2>
      <input type="text" name="name" value={user.name} onChange={onChange} required />
      <input type="email" name="email" value={user.email} onChange={onChange} required />
      <input type="password" name="password" value={user.password} onChange={onChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
