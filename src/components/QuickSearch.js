import React from 'react';

import Title from './basic/Title';
import SearchItem from './basic/SearchItem';

const QuickSearch = (props) => {
    let searches = props.details.map(ele => {
        return <SearchItem imgSource={ele.imgSrc} content={ele.text} key={ele.text}/>
    })

    return (
        <div className = "my-5">
            <Title titleDetails = {'Quick Searches'} subtitleDetails = {'Discover restaurants by type of meal'}/>
            <div className = "row bg-white mt-3 mb-2">
                {searches}
            </div>
        </div>
        
    )
}

export default QuickSearch;