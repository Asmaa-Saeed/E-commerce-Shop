import React from 'react';

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return <div className={`p-4 text-center ${className}`}>{children}</div>;
};

export default CardContent;
