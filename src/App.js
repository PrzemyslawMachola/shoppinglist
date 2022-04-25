import './App.scss';
import { Outlet, Link } from "react-router-dom";
import React, {useEffect, useContext} from "react";
import {AppContext} from "./index";
// import Menu from "./routes/menu";

const App = () => {

    const {state, setState} = useContext(AppContext);
    const API = "http://localhost:3005";

    useEffect(()=>{
        fetch(`${API}/db`)
            .then(response => response.json())
            .then(data => {
                setState(data);
            })
            .catch(error => {
                console.log(error);
        })},[]);

    return (
    <div className="container">
      <div
          style={{
            display:"flex",
            justifyContent:"space-between",
            padding:"20px",
            borderBottom:"1px solid grey",
          }}
          className="logo">
        <Link to="/">Shopping</Link>
        <Link to="/routes/menu">Menu</Link>
      </div>

        <Outlet />
    </div>
  );
}

export default App;
