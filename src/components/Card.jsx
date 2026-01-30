import React from 'react';

const Card = ({ children, className = '', style = {} }) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: 'var(--color-card-bg)',
        borderRadius: 'var(--radius-card)',
        padding: '24px',
        border: 'none',
        boxShadow: 'none',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Card;
