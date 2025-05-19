import { useState } from 'react'
import Button from '../../components/button/Button'
import Input from '../../components/Input/Input'
import TodoSection from '../../components/todoSection/TodoSection'
import type { TodoType } from '../../types/todoType'
import { v4 as uuid } from 'uuid'
import './Todo.css'

const Todo = () => {

  const [inputValue, setInputValue] = useState<string>("")
  const [todos, setTodos] = useState<TodoType[]>([])

  //function for add todo
  const handleAddTodo = () => {

    if (inputValue) {

      const todoObj: TodoType = {

        id: uuid(),
        text: inputValue,
        isCompleted: false

      }

      setTodos(pre => [...pre, todoObj])
      setInputValue("")

    }

  }

  //function for delete
  const handleDelete = (todoId: string) => {

    if (todoId) {

      const filteredTodos = todos.filter(todo => todo.id !== todoId)
      setTodos(filteredTodos)

    }

  }

  //function for complete task
  const handleChangeComplete = (isCompletedValue: boolean, index: number) => {

    if (index === 0 || index > 0) {

      const newTodos = todos
      newTodos[index].isCompleted = isCompletedValue
      setTodos(() => [...newTodos])

    }

  }

  return (

    <div className='todo-container'>
      <h1>TODO</h1>
      <div className='todo-input-section'>
        <Input className='todo-input' type='text' placeholder='Enter you todo here' inputValue={inputValue} onChangeEvent={((event : React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value))} />
        <Button name='Add' className='todo-add-button' onClick={handleAddTodo} />
      </div>
      <TodoSection todos={todos} handleDelete={handleDelete} handleChangeComplete={handleChangeComplete} />
    </div>

  )
}

export default Todo