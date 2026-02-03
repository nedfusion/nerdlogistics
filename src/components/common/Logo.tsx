import React from 'react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/nerd_logo.png"
        alt="Nerd Logistics - Professional Logistics and Transportation Services"
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;