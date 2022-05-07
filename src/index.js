import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Menu from "./routes/menu";
import MainView from "./routes/mainView";
import NewList from "./routes/newList";
import Lists from "./routes/lists";
import {Products} from "./routes/products"
import ListView from "./routes/listView";

export const AppContext = createContext(null);

const Main = () => {

    const [state, setState] = useState({
        products: [
            {
                name: "",
                category: "",
                id: "",
                visibility: true,
                buyingPreference: [],
            },
        ],
        lists: [
            {
                name: "",
                id: "",
                productsToBuy: [{
                    productName: "",
                    productCategory: "",
                    quantity: ""
                }]
            },
        ],
        nameInput: "",
        categoryInput: "",
        editId: "",
        listNameInput: "",
        displayListName: false,
        currentList: "",
        counter: "licznik",
    })

    return (
        <BrowserRouter>
            <AppContext.Provider value={{ state, setState }}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/" element={<MainView />} />
                        <Route path="/routes/newList" element={<NewList />} />
                        <Route path="/routes/Lists" element={<Lists />} />
                        <Route path="/routes/Products" element={<Products />} />
                        <Route path="/routes/listview" element={<ListView />} />
                    </Route>
                </Routes>
            </AppContext.Provider>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main />
);

reportWebVitals();
