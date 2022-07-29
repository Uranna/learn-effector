
import { useEffect, useRef } from "react";
import { addTodo, fetchExampleTodos } from "../effector/todos";
import Input from "./input";
import { v4 as uuid } from 'uuid';

interface IRef {
    getValue: () => string
    update: (newValue: string) => void
}

function CreateTodos() {
    const element = useRef<IRef>()

    const create = () => {
        const value = element.current?.getValue()
        if (value) {
            addTodo({
                id: uuid(),
                title: value,
                completed: false
            })}
        
        element.current?.update('')
    }

    return ( 
        <div className="container">
        <form>
            <Input name='todo' _ref={methods => element.current = methods}/>
            <button className="button" onClick={create}>Создать</button>
        </form>

        <button className="button" onClick={() => fetchExampleTodos()}>Загрузить</button>
        </div>
    );
}

export default CreateTodos;