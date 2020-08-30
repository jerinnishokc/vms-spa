import React from 'react';
import './helperContainer.styles.css';

const HelperContainer = ({title, helperText}) => {
    return (
        <div className="helper-container">
            <h2>{title}</h2>
            <p>{helperText}</p>
        </div>
    );
};

export default HelperContainer;