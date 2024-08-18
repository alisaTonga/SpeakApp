import style from './input.module.css'

interface IInputProps {
    label?: string;
    name?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    placeholder?: string;
  }
  
  export default function Input({ label = 'default', name='input', type='text', placeholder='default' }: IInputProps) {
  
    return (
      <>
        <label className={style.label}>{label}</label>
        <input type={type} name={name} placeholder={placeholder} />
      </>
    );
  }
  