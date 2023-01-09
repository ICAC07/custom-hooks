import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer'

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del Alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 2,
    //     description: 'Recolectar la piedra del Poder',
    //     done: false,
    // }
]

export const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    } 

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const handleNewTodo = (todo) => {
        // console.log(todo);
        const newAction = {
            type : 'Add',
            payload : todo,
        }

        dispatch(newAction);
    }

    const handleDeleteTodo = (id) => {
        // console.log('id:' + id);
        const newAction = {
            type : 'Delete',
            payload : id,
        }

        dispatch(newAction);
    }

    const handleToggleTodo = (id) => {
        // console.log(id);
        const newAction = {
            type : 'Done',
            payload : id,
        }

        dispatch(newAction);
    } 

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;
    

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}