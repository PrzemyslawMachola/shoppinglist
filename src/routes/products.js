import {Link, Outlet} from "react-router-dom";
import React from "react";

const Products = () => {
    return (
        <div>
            <div className="center">List of products</div>
            <Outlet />
        </div>
    )
}

export default Products;