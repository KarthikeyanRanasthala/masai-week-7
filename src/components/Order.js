import React from 'react';

import Title from './basic/Title'

const Order = () => {
    return (
        <div>
            <Title titleDetails = {'Order Food Online'} subtitleDetails = {'Best restaurants delivering to your doorstep'}/>
            <div style = {{backgroundColor: 'white'}} className = 'p-3'>
                <p className = 'font-weight-bold'>Enter your delivery location</p>
                <div className = "input-group flex-nowrap">
                    <input className = "form-control" placeholder = "Type delivery location here"></input>
                    <div className = "input-group-append">
                        <button className = "btn btn-outline-secondary">Detect</button>
                    </div>  
                </div>
                <button className = "btn btn-success my-3" style = {{margin: '0px 70px'}}>Order Food Online!</button>
                <hr></hr>
                <p className = "text-success py-5 text-center">Use code KOMATO to get up to 99% OFF. T&Cs apply.</p>
            </div>
        </div>
    )
}

export default Order;