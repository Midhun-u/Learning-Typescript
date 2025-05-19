import type { InputType } from '../../types/inputType'
import './Input.css'

const Input = ({ className, type, placeholder , inputValue , onChangeEvent , checked}: InputType) => {

  return (

    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeEvent}
        checked={checked}
      />
    </>

  )
}

export default Input