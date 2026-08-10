import React from 'react';

const SuccessMessage = ({ message }) => {
    if (!message) return null;
    return (
        <div className="alert alert-success" role="alert">
            ✅ {message}
        </div>
    );
};

export default SuccessMessage;
