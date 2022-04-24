import {Link, Outlet} from "react-router-dom";
import React, {useContext} from "react";
import {AppContext} from "../index";

const Products = () => {
    const {state, setState} = useContext(AppContext);
    return (
        <div>
            <div className="center">List of products
            <h1>{state.name}</h1></div>
            <button onClick={()=> setState (prev=>({
                ...prev,
                name: "Paweł"
            }))}>klik</button>
            <Outlet />
        </div>
    )
}

export default Products;