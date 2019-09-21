import React from 'react';
import Card from './basic/Card';
import Title from './basic/Title';

const CollectionArea = (props) => {
    let collections = props.details.items.map(ele => {
        return <Card cardDetails = {ele} key = {ele.cardTitle}/>
    })
    return (
        <div>
            <Title titleDetails = {props.details.mainHead} subtitleDetails = {props.details.subHead} />
            <div className = "row">
                {collections}
                <div className = "card text-danger col-md-10 mx-2 p-3 text-center">All Collections In Bangalore</div>
            </div>
            
        </div>

    )}

export default CollectionArea;