import { useState } from "react"
import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"
import { useTodos } from "./CustomHooks/useTodos"

export const TodoApp = () => {

    const { todos, todosCount, pendingTodos, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <h1>TodoApp:{todosCount} <small>Pendientes:{pendingTodos}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <AddTodo onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
