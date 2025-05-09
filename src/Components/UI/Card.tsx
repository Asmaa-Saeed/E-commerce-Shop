import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`rounded-md shadow-lg bg-white overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Card;
