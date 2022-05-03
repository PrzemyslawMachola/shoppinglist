import React, {useContext, useState} from "react";
import {AppContext} from "../index";
import {logDOM} from "@testing-library/react";

const Products = () => {
    const {state, setState} = useContext(AppContext);
    const [nameInputState, setNameInputState] = useState("");
    const [categoryInputState, setCategoryInputState] = useState("");
    const [editId, setEditId] = useState("");

    const handleAdd = function(e) {
        e.preventDefault();

        const data = {
            name: nameInputState,
            category: categoryInputState
        };
        fetch("http://localhost:3005/products/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
            }
            )
            .then(response => response.json())
            .then(data => {
                setState(prev=>({
                    ...prev,
                    products: [...prev.products, data]
                }))
            })
            .catch(error => {
                console.log(error);
            });
        setNameInputState("");
        setCategoryInputState("");
    };

    const handleRemove = (id) => {
        fetch("http://localhost:3005/products/" + id , {method:"DELETE"})
            .then(result=>result.json())
            .then(()=>{
                setState(prev=>({
                        ...prev,
                        products: prev.products.filter(element=>element.id !== id)
                    }));
            })
            .catch(error=>console.log("error"))
    };

    const handleEdit = (id) => {
        state.products.forEach(element=>{
            if(element.id === id) {
                setNameInputState(element.name);
                setCategoryInputState(element.category);
                setEditId(id);
        }})
    }

    const editProduct = function(e) {
        e.preventDefault();

        const data = {
            name: nameInputState,
            category: categoryInputState,
            id: editId,
        };

        fetch("http://localhost:3005/products/" + editId, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            }
        )
            .then(response => response.json())
            .then(product =>{
                const copy = [...state.products];
                const index = copy.findIndex(el => el.id === editId);
                copy[index] = product;
                setState(prev => ({
                    ...prev,
                    products: copy
                }))
                setEditId("")
            })
            .catch(error => {
                console.log(error);
            });
        console.log(state.products)
        setNameInputState("");
        setCategoryInputState("");
    }

    return (
        <div className="container">
            <div className="title center">Zarządzaj swoimi produktami</div>
            <div className="productsList">
                {state.products.map(function(product) {
                    return (
                        <div key={product.id} className="product">
                            <div className="productDescription">
                                <div className="productName">{product.name}</div>
                                <div className="productCategory">{product.category}</div>
                            </div>
                            <div className="productButtons">
                                <button className="button" onClick={()=>handleEdit(product.id)}>
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button className="button" onClick={()=>handleRemove(product.id)}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                    )})}

            </div>
            <form onSubmit={editId ? editProduct : handleAdd} className="productsForm">
                <div className="">
                    <input type="text" value={nameInputState} onChange={e=>setNameInputState(e.target.value)} id="newProductName" placeholder="nowy produkt"></input>
                    <input type="text" value={categoryInputState} onChange={e=>setCategoryInputState(e.target.value)} id="newProductCategory" placeholder="kategoria"></input>
                </div>
                <button className="newProductButton button">
                    {editId ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-plus"></i>}
                </button>

            </form>
        </div>
    )
}

export default Products;