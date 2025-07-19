import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getUsers, saveUser } from '../utils/storage';
import AuthForm from '../components/AuthForm';

function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleRegister = ({ username, password }) => {
    const users = getUsers();
    if (users.find(u => u.username === username)) {
      setError('Username already exists');
      return;
    }
    const newUser = { username, password };
    saveUser(newUser);
    login(newUser);
    navigate('/');
  };

  return (
    <div className="container mx-auto max-w-md py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
      {error && <div className="text-red-600 mb-4 text-center">{error}</div>}
      <AuthForm onSubmit={handleRegister} submitLabel="Register" />
      <div className="text-center mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
      </div>
    </div>
  );
}

export default Register;