import React from 'react';
import './box.styles.css';

const Box = (props) => {
    return (
        <div className="box-container" style={{"background":props.service.color}}>            
            <h1>{props.service.name}</h1>            
            {
                !!props.service.imgUrl ? 
                <div className="box-image-container" style={{"background":`url(${props.service.imgUrl})`,"background-position": "top left",
                "background-size": "cover","background-repeat":"no-repeat"}}>                    
                </div>
                : null
            }
        </div>
    );
};

export default Box;

// <img src={props.service.imgUrl} alt={props.service.name} />