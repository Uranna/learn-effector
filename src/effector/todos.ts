import { createStore, createEvent, createEffect } from "effector";

export interface ITodos {
    id: number | string;
    title: string;
    description?: string;
    lastDate?: Date;
    completed: boolean
}

const todosStore = createStore<Array<ITodos>>([]);

export const addTodo = createEvent<ITodos>();
export const addTodos = createEvent<Array<ITodos>>();
export const completeTodo = createEvent<Pick<ITodos, 'id'>>();
export const removeTodo = createEvent<Pick<ITodos, 'id'>>();

export const fetchExampleTodos = createEffect( async() =>  {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=3'
    const req = await fetch(url)
    return req.json()
})

fetchExampleTodos.done.watch(({params, result}) => {
    addTodos(result)
    console.log('result: ', result);
})

fetchExampleTodos.fail.watch(({params, error}) => {
    console.error('params: ', params);
    console.error('error: ', error);
})

todosStore
    .on(addTodo, (state, payload) => [...state, payload])
    .on(addTodos, (state, payload) => [...state, ...payload])
    .on(completeTodo, (state, {id}) => state.map((todo) => {
        if (todo.id !== id) return todo;
        return {...todo, completed: true}
    }))
    .on(removeTodo, (state, {id}) => state.filter(todo => todo.id !== id))

export default todosStore