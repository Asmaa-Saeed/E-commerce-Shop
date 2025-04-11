import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  className,
}) => {
  const baseStyles = 'px-4 py-2 rounded-full font-medium capitalize transition-all duration-300';
  const variants = {
    default: 'bg-pink-500 text-white hover:bg-pink-600',
    outline: 'border border-pink-500 text-pink-500 hover:bg-pink-100',
  };

  return (
    <button
      onClick={onClick}
      className={classNames(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
