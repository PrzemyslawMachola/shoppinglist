import {Link, Outlet} from "react-router-dom";
import React from "react";

const Lists = () => {
    return (
        <div>
            <div className="center">List of lists</div>
            <Outlet />
        </div>
    )
}

export default Lists;