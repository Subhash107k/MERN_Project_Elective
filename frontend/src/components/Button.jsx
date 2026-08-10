import React from 'react';

const Button = ({ children, type = 'button', variant = 'primary', size = '', onClick, disabled = false, className = '' }) => {
    const variantClass = `btn-${variant}`;
    const sizeClass = size ? `btn-${size}` : '';
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn ${variantClass} ${sizeClass} ${className}`.trim()}
        >
            {children}
        </button>
    );
};

export default Button;
