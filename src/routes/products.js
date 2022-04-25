import React, {useContext} from "react";
import {AppContext} from "../index";

const Products = () => {
    const {state, setState} = useContext(AppContext);

    const handleSubmit = function(e) {
        e.preventDefault();
        const newProductName = document.querySelector("#newProductName").value;
        const newProductCategory = document.querySelector("#newProductCategory").value;

        const data = {
            name: newProductName,
            category: newProductCategory
        };
        fetch("http://localhost:3005/products", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
            }
            )
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="center">List of products
                {state.products.map(function(product) {return <div key={product.id}>{product.name}{product.category}</div>})}

            {/*    <h1>{state.name}</h1>*/}
            {/*<button onClick={()=> setState (prev=>({*/}
            {/*    ...prev,*/}
            {/*    name: "Paweł"*/}
            {/*}))}>klik</button>*/}
            </div>
            <form onSubmit={handleSubmit} className="center">
                <input type="text" id="newProductName" placeholder="co kupić?"></input>
                <input type="text" id="newProductCategory" placeholder="kategoria"></input>
                <button>+</button>
                {/*<button onSubmit={()=>setState (*/}
                {/*        products.push( {*/}
                {/*           name: document.querySelector("#newProductName").value,*/}
                {/*           category: document.querySelector("#newProductCategory").value,*/}

                {/*        }))}*/}
                {/*    >dodaj</button>*/}
            </form>
        </div>
    )
}

export default Products;