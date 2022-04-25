import {Link, Outlet} from "react-router-dom";
import React from "react";

const MainView = () => {
    return (
        <div className="navContainer">
            <nav className="menu center">
                <Link to="/routes/newList">New List</Link>
                <Link to="/routes/lists">Lists</Link>
                <Link to="/routes/products">Products</Link>
            </nav>
        </div>
    )
}

export default MainView;