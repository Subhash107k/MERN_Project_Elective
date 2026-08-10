import React from 'react';

const Input = ({ label, id, type = 'text', value, onChange, placeholder = '', required = false, isTextArea = false }) => {
    return (
        <div className="form-group">
            {label && (
                <label htmlFor={id} className="form-label">
                    {label} {required && <span style={{ color: 'var(--danger-color)' }}>*</span>}
                </label>
            )}
            {isTextArea ? (
                <textarea
                    id={id}
                    className="form-control"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    rows={4}
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    className="form-control"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    );
};

export default Input;
