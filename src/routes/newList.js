import {Link, Outlet} from "react-router-dom";
import React from "react";
import {useContext} from "react";
import {AppContext} from "../index";
import {ProductForm} from "./products";
import ListView from "./listView";


const NewList = () => {
    const {state, setState} = useContext(AppContext);

    let filteredProducts = state.products.filter(function (element) {
        return element.visibility === false
    })

    const handleProduct = (product, visibility) => {

        const copy = [...state.products];
        const index = copy.findIndex(el => el.name === product);
        copy[index] = {...copy[index], visibility: visibility};
        setState(prev => ({
            ...prev,
            products: copy
        }))
    }

    const currentListId = (id) => {
        setState(prev => ({
            ...prev,
            currentList: id
        }))
    }

    const handleAddList = function (e) {
        e.preventDefault();

        let newListData = {
            name: state.listNameInput,
            id: "",
            productsToBuy: filteredProducts
        }

        fetch("http://localhost:3005/lists", {
                method: "POST",
                body: JSON.stringify(newListData),
                headers: {"Content-Type": "application/json"}
            }
        )
            .then(response => response.json())
            .then(data => {
                setState(prev => ({
                    ...prev,
                    lists: [...prev.lists, data]
                }))
                currentListId(data.id)
            })
            .catch(error => {
                console.log(error);
            })
        handleDisplayName(e)
    };

    const handleDisplayName = function (e) {
        e.preventDefault();
        setState(prev => ({...prev, displayName: true}))
    };

    let counter = 0;

    const handleCounter = (action) => {
        console.log(counter)
        counter = counter + action;
        console.log(counter)
    }

    return (
        <div className="container">
            <div className="navButtons">
                <button className="backButton button">
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                {state.displayName ? <div className="title center">{state.listNameInput}</div> : ""}
                <button className="saveButton button" onClick={handleAddList}>
                    <i className="fa-solid fa-save"></i>
                </button>
            </div>

            {state.displayName ?
                <div className="center">
                    <Link to="/routes/listview"
                          element={<ListView/>}
                          className="mainButton">
                        Go shopping</Link>
                </div>
                :
                <form className="listNameForm productsForm">
                    <input type="text"
                           value={state.listNameInput}
                           onChange={e => setState(prev => ({...prev, listNameInput: e.target.value}))}
                           id="newListName"
                           placeholder="nazwa"></input>
                </form>
            }

            <ProductForm/>

            <div className="choose">
                <div className="productsChoose">wybierz
                    {state.products.map(function (product) {
                        return (
                            product.visibility === true ?
                                <div key={product.id} className="listProduct">
                                    <div className="productDescription">
                                        <div className="productName">{product.name}</div>
                                    </div>
                                    <div className="productButtons">
                                        <button className="button listProductBox" onClick={() => handleCounter(1)}>
                                            <i className="fa-solid fa-plus listProductBox"></i>
                                        </button>
                                        <button className="button listProductBox" onClick={() => handleCounter(-1)}>
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                        <div className="quantity listProductBox">{counter}</div>
                                        <button className="button listProductBox"
                                                onClick={() => handleProduct(product.name, false)}>
                                            <i className="fa-solid fa-angle-right"></i>
                                        </button>
                                    </div>
                                </div>
                                : ""
                        )
                    })}
                </div>
                <div className="listPreview">podgląd

                    {state.products.map(function (product) {
                        return (
                            product.visibility === false ?
                                <div key={product.id} className="listProduct">

                                    <div className="productButtons">
                                        <button className="button listProductBox"
                                                onClick={() => handleProduct(product.name, true)}>
                                            <i className="fa-solid fa-angle-left"></i>
                                        </button>
                                        <div className="quantity listProductBox">{counter}</div>

                                        <button className="button listProductBox" onClick={() => handleCounter(1)}>
                                            <i className="fa-solid fa-plus listProductBox"></i>
                                        </button>
                                        <button className="button listProductBox" onClick={() => handleCounter(-1)}>
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                    </div>
                                    <div className="productDescription">
                                        <div className="productName">{product.name}</div>
                                    </div>
                                </div>
                                : ""
                        )
                    })}

                </div>
            </div>

            <Outlet/>
        </div>
    )
}

export default NewList;