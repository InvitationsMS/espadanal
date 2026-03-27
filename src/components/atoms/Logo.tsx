import React from 'react';
import './Logo.css';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  return (
    <div className={`logo-container logo-${size}`}>
      <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Espadañal Logo" className="logo-image" />
    </div>
  );
};
