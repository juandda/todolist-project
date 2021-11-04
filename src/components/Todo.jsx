import React from "react";

const Todo = ({title, status, getCompleteTodo, id}) =>{
    return(
        <div className="card-container">
            <h3>{title}</h3>
            <button
            onClick={()=> getCompleteTodo(id)}
            className={status? "complete" : "reset"}>{status ? "complete" : "reset"}</button>
        </div>
    )
}


export default Todo