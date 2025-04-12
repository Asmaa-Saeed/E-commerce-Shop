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
  const baseStyles = 'px-4 py-1 rounded-full font-medieum capitalize transition-all duration-300';
  const variants = {
    default: 'bg-teal-600 text-white cursor-pointer hover:bg-teal-700',
    outline: 'border border-teal-600 cursor-pointer text-teal-600 hover:bg-teal-100',
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
