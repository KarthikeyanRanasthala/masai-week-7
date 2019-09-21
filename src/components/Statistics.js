import React from 'react';

import Stat from './basic/Stat';

const Statistics = (props) => {
    let statistics = props.details.map(ele => {
        return <Stat statDetails={ele} key={ele.category}/>
    })

    return statistics;
}

export default Statistics;