import React from 'react';
import './box.styles.css';

const Box = (props) => {
    return (
        <div className="box-container">
            <div className={`box-text-container-${props.service.id % 2 === 0 ? 'even': 'odd'}`} style={{"background":props.service.color}}>
            <h1>{props.service.name}</h1>            
            {props.service.id % 2 === 0 ? <hr />: null} 
            <p>{props.service.text}</p>            
            </div>                        
            {
                !!props.service.imgUrl ? 
                <div className={`box-image-container-${props.service.id % 2 === 0 ? 'even': 'odd'}`} style={{"background":`url(${props.service.imgUrl})`,"backgroundPosition": "top left",
                "backgroundSize": "cover","backgroundRepeat":"no-repeat"}}>                    
                </div>
                : null
            }
        </div>
    );
};

export default Box;

// <img src={props.service.imgUrl} alt={props.service.name} />