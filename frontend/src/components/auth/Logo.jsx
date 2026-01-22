import React from 'react';

const Logo = ({ size = "large" }) => {
  const sizes = {
    small: { container: "w-12 h-12", text: "text-xs" },
    medium: { container: "w-16 h-16", text: "text-sm" },
    large: { container: "w-24 h-24", text: "text-base" }
  };

  const currentSize = sizes[size];

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Logo: Shield with Heart */}
      <div className={`${currentSize.container} relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield background */}
          <path
            d="M50 10 L20 25 L20 50 Q20 75 50 90 Q80 75 80 50 L80 25 Z"
            fill="url(#shieldGradient)"
            stroke="#4A90E2"
            strokeWidth="2"
          />
          
          {/* Heart */}
          <path
            d="M50 65 C50 65 35 52 35 42 C35 35 40 32 45 32 C47.5 32 50 34 50 34 C50 34 52.5 32 55 32 C60 32 65 35 65 42 C65 52 50 65 50 65 Z"
            fill="#FFFFFF"
            stroke="#FFB6C1"
            strokeWidth="1.5"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FFB6C1', stopOpacity: 0.9 }} />
              <stop offset="50%" style={{ stopColor: '#E0F2FE', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: '#87CEEB', stopOpacity: 0.9 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Brand Name */}
      <div className="text-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
          Anti Threat
        </h1>
        <p className="text-xs text-muted-foreground mt-1">Your Safety, Our Priority</p>
      </div>
    </div>
  );
};

export default Logo;