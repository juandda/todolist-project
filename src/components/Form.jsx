import React from "react";

const Form = ({todoList, setTodoList, setStatus}) =>{

    const statusHandle = (e) =>{
        setStatus(e.target.value)
    }

    return(
        <form action="">
            <div>
                <select onChange={statusHandle} name="todos" id="">
                    <option value="all">Todos</option>
                    <option value="completed">Completos</option>
                    <option value="uncompleted">Incompleto</option>
                </select>
            </div>
        </form>
    )
}

export default Form