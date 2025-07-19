import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getUsers } from '../utils/storage';
import AuthForm from '../components/AuthForm';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = ({ username, password }) => {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      login(user);
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container mx-auto max-w-md py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      {error && <div className="text-red-600 mb-4 text-center">{error}</div>}
      <AuthForm onSubmit={handleLogin} submitLabel="Login" />
      <div className="text-center mt-4">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
      </div>
    </div>
  );
}

export default Login;