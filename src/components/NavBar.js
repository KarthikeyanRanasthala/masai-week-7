import React from 'react';

const Navbar = () => {
    return (
        <div className = "bg-white">
            <div className = "container">
                <nav className = "navbar">
                    <a className = "navbar-brand" href = "#" style = {{fontSize: 14, textDecoration: 'none', color: 'black'}}>
                        <img src = "https://b.zmtcdn.com/images/icons/get-the-app-plain.svg" style = {{width: 20, height: 20, margin: '0px 5px'}} className="d-inline-block align-top" alt = ""></img>
                        <span>Get the app</span>
                    </a>
                    <div>
                        <form className = "form-inline">
                            <a href = "#" style = {{fontSize: 14, textDecoration: 'none', color: 'black', margin: '0px 10px'}}>
                                <img src = "https://b.zmtcdn.com/images/icons/order-online.svg" style = {{width: 20, height: 20, margin: '0px 5px'}} className="align-top" alt = ""></img>
                                Order Food
                            </a>
                            <a href = "#" style = {{fontSize: 14, textDecoration: 'none', color: 'black', margin: '0px 10px'}}>
                                <img src = "https://b.zmtcdn.com/images/icons/book-a-table.svg" style = {{width: 20, height: 20, margin: '0px 5px'}} className="align-top" alt = ""></img>
                                Book a Table
                            </a>
                            <a href = "#" style = {{fontSize: 14, textDecoration: 'none', color: 'black', margin: '0px 10px'}}>
                                <img src = "https://b.zmtcdn.com/images/icons/header_gold_icon.svg" style = {{width: 20, height: 20, margin: '0px 5px'}} className="align-top" alt = ""></img>
                                Komato Platinum
                            </a>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;