
import style from './button.module.css'


interface IButtonProps {
    name?: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void;
  }
  
  
  export default function Button({ type='button', onClick, name='default' }:IButtonProps) {
    return (
      <button type={type} onClick={onClick} className={style.Button}>
        {name}
      </button>
    );
  }
  