import React, {useContext} from "react";
import {AppContext} from "../index";

const Products = () => {
    const {state, setState} = useContext(AppContext);

    const handleAdd = function(e) {
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
    };

    const handleRemove = (id) => {
        console.log(id);

        fetch("http://localhost:3005/products/" + id, {method:"DELETE"})
            // .then(result=>result.json())
            // .then(data=>{
            //     console.log(data);
            //     let filteredCars = cars.filter(element=>element.id !== id)
            //     setCars(filteredCars)
            // })
            // .catch(error=>console.log("error"))

    };

    const handleEdit = () => {

    }

    return (
        <div className="productsContainer">
            <div className="productsTitle center">Zarządzaj swoimi produktami</div>
            <div className="productsList">
                {state.products.map(function(product) {
                    return (
                        <div key={product.id} className="product">
                            <div className="productDescription">
                                <div className="productName">{product.name}</div>
                                <div className="productCategory">{product.category}</div>
                            </div>
                            <div className="productButtons">
                                <button className="button productEdit" onClick={handleEdit}>
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button className="button productRemove" onClick={()=>handleRemove(product.id)}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                    )})}

            </div>
            <form onSubmit={handleAdd} className="productsForm product">
                <div className="">
                    <input type="text" id="newProductName" placeholder="nowy produkt"></input>
                    <input type="text" id="newProductCategory" placeholder="kategoria"></input>
                </div>
                <button className="newProductButton button">
                    <i className="fa-solid fa-plus"></i>
                </button>

            </form>
        </div>
    )
}

export default Products;