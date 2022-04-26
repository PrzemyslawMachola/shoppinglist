import {Link, Outlet} from "react-router-dom";
import React from "react";

const MainView = () => {
    return (
        <div className="navContainer">
            <nav className="menu center">
                <Link to="/routes/newList" className="mainButton">New List</Link>
                <Link to="/routes/lists" className="mainButton">Lists</Link>
                <Link to="/routes/products" className="mainButton">Products</Link>
            </nav>
        </div>
    )
}

export default MainView;