import React from 'react';
import './formItem.styles.scss';

const FormItem = ({handleChange, label, ...otherProps}) => {
    return (
        <div className="group">
            <input
            className="form-input"
            onChange={handleChange}
            {...otherProps}
            />
            {label ? (
            <span
                className={`${
                otherProps.value.length ? 'shrink' : null
                } form-input-label`}
            >
                {label}
            </span>
            ) : null}
        </div>
    );
}

export default FormItem;