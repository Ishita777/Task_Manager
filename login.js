import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user);
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <input type="email" name="email" value={user.email} onChange={onChange} required />
      <input type="password" name="password" value={user.password} onChange={onChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
