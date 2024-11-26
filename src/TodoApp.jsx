import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"
import { useTodos } from "./CustomHooks/useTodos"

export const TodoApp = () => {

    const { todos, todosCount, pendingTodos, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodos();

    return (
        <div className="PagePrincipal">
            <div className="textPrincipal">
                <h1>Todo List App: {todosCount}</h1>
                <span>Tareas pendientes: {pendingTodos}</span>
            </div>
            <hr />


            <div className="containerTodo">

                <div className="containerTodo">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>


                <div className="text-center">
                    <h4>Agregar Tarea</h4>
                    <hr />
                    <AddTodo onNewTodo={handleNewTodo} />
                </div>
            </div>
        </div>
    )
}
