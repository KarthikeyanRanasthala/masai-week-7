import React from 'react';

const List = (props) => {
    let decor = {
        textDecoration: 'none',
        fontSize: 14
    }
    
    return (
        <a className ='col-md-4 text-dark py-1 text-left' style={decor}  href={'#'} data-toggle="tooltip" data-placement="bottom" title={"Restaurants in " + props.item}>{props.item}</a>
    )
}

export default List;