import { useEffect, useReducer } from "react"
import { todoReducer } from "../reducerPrincipal/todoReducer"


const init = () => {
    return JSON.parse(localStorage.getItem('todos') || '[]')
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const todosCount = todos.length
    const pendingTodos = todos.filter(todo => !todo.done).length

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] remove todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: id
        })
    }

    return { todos, todosCount, pendingTodos, handleDeleteTodo, handleNewTodo, handleToggleTodo }
}
