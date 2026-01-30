import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={className}
            style={{
                backgroundColor: 'var(--color-btn-bg)',
                color: 'var(--color-btn-text)',
                borderRadius: 'var(--radius-btn)',
                padding: '12px 24px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'transform 0.1s ease',
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
            {children}
        </button>
    );
};

export default Button;
