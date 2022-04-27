import {Link, Outlet} from "react-router-dom";
import React from "react";
import {useContext} from "react";
import {AppContext} from "../index";

const Lists = () => {
    const {state, setState} = useContext(AppContext);

    const handleEdit = () => {

    }
    const handleRemove = (id) => {
        fetch("http://localhost:3005/lists/" + id, {method:"DELETE"})
            // .then(result=>result.json())
            // .then(data=> {
            //     console.log(data)
            //
            //     let filteredLists = state.lists.filter(element=>element.id !== id)
            //     setState(filteredLists)
            // })
            // .catch(error=>console.log("error"))
        }


    return (
        <div className="container">
            <div className="title center">Moje listy zakupów</div>
            <div className="listsList">
                {state.lists.map(function(list) {
                    return (
                        <div key={list.id} className="list">
                            <div className="listName">{list.name}</div>
                            <button className="button listRemove" onClick={()=>handleRemove(list.id)}>
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    )})}

            </div>
            <button className="newListButton">
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}

export default Lists;