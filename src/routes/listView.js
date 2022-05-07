import React, {useContext} from "react";
import {AppContext} from "../index";

const ListView = () => {
    const {state, setState} = useContext(AppContext)

    // const handleBought = function () {
    //     return `style={{ opacity: 0.5 }}`
    // }

    console.log(state.currentList);

    return <div className="container center">


            {state.lists.map(function(list) {
                return (
                    list.id === state.currentList ?
                    <div className="listToCheck" key={list.id}>{list.name}
                        {list.productsToBuy.map(function(product){
                            return (
                                <div className="productToCheck"

                                     // onClick={()=>handleBought()}
                                >
                                    <div className="productDescription">
                                        <div className="productName">{product.name}</div>
                                    </div>
                                    <div className="productButtons">
                                        <i className="fa-solid fa-check" ></i>
                                    </div>
                                </div>
                            )})}

                    </div> : "")

            })}
    </div>}


export default ListView;