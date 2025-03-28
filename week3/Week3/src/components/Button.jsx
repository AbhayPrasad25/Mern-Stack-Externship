import React from 'react';

const Button = ({ onClick }) => {
    return (
        <button
            className="bg-purple-600 text-white font-semibold rounded-lg px-6 py-3 shadow-md hover:bg-purple-700 hover:shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            onClick={() => {
                console.log("Button clicked!");
                if (onClick) onClick();
            }}
        >
            Click Me
        </button>
    );
};

export default Button;
