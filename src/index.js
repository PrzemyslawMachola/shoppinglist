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
import Products from "./routes/products"

export const AppContext = createContext(null);

const Main = () => {

    const [state, setState] = useState({
            products: [
                {
                    name: "",
                    category: "",
                    id: "",
                    buyingPreference: [],
                },
            ],
            lists: {

            }
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
                    </Route>
                </Routes>
            </AppContext.Provider>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

    <Main />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
