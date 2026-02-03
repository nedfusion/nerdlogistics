import React from 'react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/NERD (1).png"
        alt="Nerd Logistics - Professional Logistics and Transportation Services"
        className="h-20 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;