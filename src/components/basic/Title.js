import React from 'react';

const Title = (props) => {
    return (
        <div>
            <h3>{props.titleDetails}</h3>
            <p className = "text-secondary">{props.subtitleDetails}</p>
        </div>
    )
}

export default Title;