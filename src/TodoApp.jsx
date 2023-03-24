import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"
import { useTodos } from "./CustomHooks/useTodos"

export const TodoApp = () => {

    const { todos, todosCount, pendingTodos, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <div className="textPrincipal">
                <h1>TodoApp: {todosCount} <span>Pendientes: {pendingTodos}</span></h1>
            </div>
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
