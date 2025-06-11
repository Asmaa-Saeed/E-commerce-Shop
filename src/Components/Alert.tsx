import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface AlertProps {
  message: string;
  onClose: () => void;
  show: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, onClose, show }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto close after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-teal-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg 
              className="w-6 h-6 text-teal-500 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-gray-800">{message}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link 
              to="/cart" 
              className="text-teal-600 hover:text-teal-700 text-sm font-medium"
            >
              Go to Cart
            </Link>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 ml-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert; 