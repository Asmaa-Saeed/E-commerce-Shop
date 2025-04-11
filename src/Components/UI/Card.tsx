import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`rounded-xl shadow-md bg-white overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Card;
