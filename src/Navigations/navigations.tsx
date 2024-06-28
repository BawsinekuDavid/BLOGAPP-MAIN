// src/components/NavigationButtons.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/settings')}>Settings</button>
      <button onClick={() => navigate('/register')}>Login</button>
      <button onClick={() => navigate('/home')}>Register</button>
    </div>
  );
};

export default NavigationButtons;
