import React from 'react';

import FList from './basic/FList';

const AboutUs = (props) => {
    let items = props.details.map(ele => {
       return <FList item={ele} />
    })

    return (
        <ul style = {{listStyle: 'none', padding: 0}}>
            {items}
        </ul>
    )
}

export default AboutUs;