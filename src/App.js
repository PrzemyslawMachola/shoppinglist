import './App.scss';
import { Outlet, Link } from "react-router-dom";
import React from "react";
// import Menu from "./routes/menu";


const App = () => {
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
