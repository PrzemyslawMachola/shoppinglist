import {Link, Outlet} from "react-router-dom";
import React from "react";
import {useContext} from "react";
import {AppContext} from "../index";
import ListView from "./listView";

const Lists = () => {
    const {state, setState} = useContext(AppContext);

    const handleEdit = () => {}

    const handleRemove = (id) => {
        fetch("http://localhost:3005/lists/" + id, {method:"DELETE"})
            .then(result=>result.json())
            .then(()=> {
                setState(prev=>({
                    ...prev,
                    lists: prev.lists.filter(element=>element.id !== id)
                }));
            })
            .catch(error=>console.log("error"))
    }

    const currentListId = (id) => setState(prev=>({ ...prev, currentList: id}))

    return (
        <div className="container">
            <div className="title center">Moje listy zakupów</div>
            <div className="listsList">
                {state.lists.map(function(list) {
                    return (
                        <div key={list.id} className="list">
                            <Link to="/routes/listview" element={<ListView />} onClick={()=>currentListId(list.id)} className="listName">{list.name}</Link>
                            <div className="productButtons">
                                <button className="button" onClick={()=>handleEdit(list.id)}>
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button className="button listRemove" onClick={()=>handleRemove(list.id)}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                    )})}

            </div>
            <button className="newListButton center">
                    <Link to="/routes/newList">
                        <i className="fa-solid fa-plus"></i>
                    </Link>
            </button>
        </div>
    )
}

export default Lists;