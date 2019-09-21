import React from 'react';

const OverView = () => {
    return (
        <div className = "card bg-dark text-white">
            <img src = "https://b.zmtcdn.com/images/foodshots/cover/pizza3.jpg?output-format=webp" className = 'card-img mainImage' alt = ""></img>
            <div className = "card-img-overlay text-white trans-bg">
                <div className = "d-flex flex-row-reverse">
                    <a href = "#" className = "btn text-white border-secondary rounded mx-1">Create an Account</a>
                    <a href = "#" className = "btn text-white border-secondary rounded mx-1">Log in</a>
                </div>
                <h3 className = "text-center" style = {{marginTop: 100}}>Find the best restaurants, cafés, and bars in Bengaluru</h3>
                <div className = "container">
                    <div className = "row">
                        <select className = "custom-select col-2 offset-1">
                            <option>Bengaluru</option>
                            <option>Chennai</option>
                            <option>Pune</option>
                        </select>
                        <input className = "form-control col-6 mx-1" placeholder = "Search for restaurants or cuisines..."></input>
                        <button className = 'btn btn-danger col-1 mx-1'>Search</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default OverView;