import React from 'react';

const recordButton = ({ label, onClick }) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};

export default recordButton;