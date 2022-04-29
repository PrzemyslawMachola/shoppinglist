import {Link, Outlet} from "react-router-dom";
import React from "react";
import {useContext} from "react";
import {AppContext} from "../index";

const NewList = () => {
    const {state, setState} = useContext(AppContext);

    let newListData = {
        name: "testowa",
        id: "",
        productsToBuy: [{
            productName: "jeden",
            productCategory: "dwa",
            quantity: 3
        }]};

    const addFromForm = () => {

    }

    const addFromList = (product) => {
       // setState(
       //
       //      "productName": product,
       //      productCategory: "",
       //      quantity: 0,
       // )
       //  }
        console.log(newListData);

    }

    const handleAddList = function(e) {
        e.preventDefault();
        // const newProductName = document.querySelector("#newProductName").value;
        // const newProductCategory = document.querySelector("#newProductCategory").value;

        fetch("http://localhost:3005/lists", {
                method: "POST",
                body: JSON.stringify(newListData),
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

    return (
        <div className="container">
            <div className="navButtons">
                <button className="backButton button">
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className="saveButton button" onClick={handleAddList}>
                    <i className="fa-solid fa-save"></i>
                </button>
            </div>

            <form className="listNameForm productsForm">
                <input type="text" id="newListName" placeholder="nazwa"></input>
                <button className="newProductButton button">
                    <i className="fa-solid fa-check"></i>
                </button>
            </form>

            <form className="productsForm">
                <div className="">
                    <input type="text" id="newProductName" placeholder="dodaj produkt"></input>
                    <input type="text" id="newProductCategory" placeholder="kategoria"></input>
                </div>
                <button className="newProductButton button">
                    <i className="fa-solid fa-plus"></i>
                </button>
            </form>

            <div className="choose">
                <div className="productsChoose">wybierz
                    {state.products.map(function(product) {
                        return (
                            <div key={product.id} className="listProduct">
                                <div className="productDescription">
                                    <div className="productName">{product.name}</div>
                                </div>
                                <div className="productButtons">
                                    <button className="button listProductBox" >
                                        <i className="fa-solid fa-plus listProductBox"></i>
                                    </button>
                                    <button className="button listProductBox">
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                    <div className="quantity listProductBox">0</div>
                                    <button className="button listProductBox" onClick={()=>addFromList(product.name)}>
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        )})}
                </div>
                <div className="listPreview">podgląd

                    {newListData.productsToBuy.map(function(element) {
                        return <div key="element.productName">{element.productName}</div>
                    })
                        }

                </div>
            </div>


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