import React from 'react';

const FList = (props) => {
    let decor = {
        textDecoration: 'none',
        fontSize: 14,
    }
    
    return (
        <li><a className ='text-secondary py-1' style={decor} href={'#'}>{props.item}</a></li>
    )
}

export default FList;