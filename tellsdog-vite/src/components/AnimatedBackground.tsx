import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default AnimatedBackground;
