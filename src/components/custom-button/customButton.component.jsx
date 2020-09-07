import React from 'react';
import './customButton.styles.css';

const CustomButton = ({children, type, ...otherProps}) => {
    return (
        <button className={`${type === 'login' ? 'login-button' : 'regular-button'}`} {...otherProps}>{children}</button>
    );
};

export default CustomButton;