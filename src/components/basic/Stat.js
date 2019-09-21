import React from 'react';

const Stat = (props) => {
    
    return (
        <div className = "text-center mx-2 col">
            <h1 className = "text-muted">{props.statDetails.numbers}</h1>
            <p className = "text-muted">{props.statDetails.category}</p>
        </div>
    )
}

export default Stat;