import React from 'react';
import './withSpinner.styles.scss';

const WithSpinner = () => {
    // return isLoading ? 
    // <div className="spinner-overlay">
    //     <div className="spinner-container"></div>
    // </div>
    // : 
    //     <WrappedComponent {...otherProps}/>
    // ;
    return (
        <div className="spinner-overlay">
            <div className="spinner-container"></div>
        </div>
    );
};

export default WithSpinner;