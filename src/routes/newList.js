import {Link, Outlet} from "react-router-dom";
import React from "react";

const NewList = () => {
    return (
        <div>
            <div className="center">
                Creating new shopping list<br/>
                dodawanie produktu przez formularz lub z listy<br/>
                usuwanie dodanych<br/>
                sortowanie wg kategorii lub kolejności<br/>
                "go shopping"
            </div>
        <Outlet />
        </div>
    )
}

export default NewList;