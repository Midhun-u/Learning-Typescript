import Button from '../button/Button'
import type { TodoType } from '../../types/todoType'
import './TodoSection.css'
import Input from '../Input/Input';

type TodoSectionType = {
    todos: TodoType[];
    handleDelete : (id : string) => void
    handleChangeComplete : (isCompletedValue : boolean , index : number) => void
}

const TodoSection = ({ todos , handleDelete , handleChangeComplete}: TodoSectionType) => {

    return (

        <>
            <div className='todo-section'>
                {
                    todos?.map((todo , index) => (

                        <div key={todo.id} className='todo-items'>
                            {
                                    todo.isCompleted
                                    ?
                                    <Input type='checkbox' className='check-box' onChangeEvent={((event) => handleChangeComplete(event.target.checked , index))} checked={true} />
                                    :
                                    // <input type="checkbox" onChange={(event) => handleChangeComplete( event.target.checked, index)} />
                                    <Input type='checkbox' className='check-box' onChangeEvent={((event) => handleChangeComplete(event.target.checked , index))} checked={false} />

                            }
                            <span className={`todo-text ${todo.isCompleted ? "line-through" : ""}`}>{todo.text}</span>
                            <Button name='Delete' className='delete-button' onClick={() => handleDelete(todo.id)} />
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default TodoSection