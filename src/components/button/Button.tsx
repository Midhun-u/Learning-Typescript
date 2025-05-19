import './Button.css'
import { type ButtonType } from '../../types/buttonType'


const Button = ({name , className , onClick} : ButtonType) => {

  return (

    <button className={className} onClick={onClick}>
        <span>{name}</span>
    </button>

  )
}

export default Button