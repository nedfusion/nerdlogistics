import React from 'react';
import { Truck } from 'lucide-react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', isWhite = false }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center bg-secondary-500 text-white rounded-md p-1">
        <Truck size={24} />
      </div>
      <div className={`font-heading font-bold text-xl ${isWhite ? 'text-white' : 'text-primary-950'}`}>
        <span>Nerd</span>
        <span className="text-secondary-500">Logistics</span>
      </div>
    </div>
  );
};

export default Logo;