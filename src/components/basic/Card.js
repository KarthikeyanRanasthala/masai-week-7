import React from 'react';

const Card = (props) => {
    return (
        <div className = "card mb-3 col-md-5 mr-3">
            <div className = "row no-gutters">
                <div className = "col-md-4">
                    <img src = {props.cardDetails.imgLink} className = "card-img mt-3" alt = ""/>
                </div>
                <div className = "col-md-8">
                    <div className = "card-body">
                        <p className = "card-title font-weight-bold">{props.cardDetails.cardTitle}</p>
                        <p className = "card-text">{props.cardDetails.cardPara}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;