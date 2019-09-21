import React from 'react';

const SearchItem = (props) => {
    return (
        <div className = "col text-center">
            <img src={props.imgSource} className = "w-75" alt = ""/>
            <p>{props.content}</p>
        </div>
    )
}

export default SearchItem;