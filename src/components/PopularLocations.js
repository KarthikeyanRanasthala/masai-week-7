import React from 'react';

import Title from './basic/Title';
import List from './basic/List';

const PopularLocations = (props) => {
    let locations = props.details.map(ele => {
       return <List item={ele} key={ele.item} />
    })

    return (
        <div className = "my-5">
            <Title titleDetails = {'Popular localities in and around Bengaluru'} subtitleDetails = {'Explore restaurants, bars, and cafés by locality'} />
            <div className = "row bg-white p-2">
                {locations}
            </div>
        </div>
    )
}

export default PopularLocations;