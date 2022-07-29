import React, { useEffect } from "react";
import { useList } from "effector-react";
import "./todos.scss";

import todosStore, { addTodo, completeTodo, removeTodo, ITodos } from "../effector/todos";
import CreateTodos from "../component/createTodo";

const Todo = ({ id, title, completed, description = '' }: ITodos) => {
  return (
    <div className={`todo-card ${completed ? 'todo-card--completed': ''}`}>
      <div className="todo-class__content">
      <p className='todo-card__title'>{title}</p>
      {description && <p className='todo-card__description'>{description}</p>}
      </div>
      
      <div className='todo-card__buttons'>
        <button className='button completed-todo' {...completed ? {disabled: true} : ''} onClick={()=>completeTodo({id})}>Выполнено</button>
        <button className='button completed-todo' onClick={() => removeTodo({id})}>Удалить</button>
      </div>
    </div>
  );
};

function TodosPage() {
  useEffect(() => {
    console.trace('++++++++++')
    addTodo({ id: 1, title: "Создать первую задачу", description: 'Изучить effector', completed: false });
    addTodo({ id: 2, title: "Создать вторую задачу", completed: false });
    addTodo({ id: 3, title: "Создать третью задачу", completed: false });

  }, []);

  return (
    <>

      <div className='container' onSubmit={(e) => {
        e.preventDefault();
        console.log('*')
      }}>
        <h2 className="title">Todo</h2>
        <CreateTodos />
        {useList(todosStore, Todo)}
      </div>
    </>
  );
}

export default TodosPage;
