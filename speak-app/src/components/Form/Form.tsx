import Button from '../Button/Button';
import Input from '../input/Input';
import style from './form.module.css'

export default function MyForm() {

    return (
      <form className={style.myForm}>
        <Input label={'Ваш логин:'} placeholder={'login'} type={'text'} name={'login'} />
        <Input label={'Действительная почта:'} placeholder={'email'} type={'email'} name={'email'}  />
        <Input label={'Ваш пароль:'} placeholder={'password'} type={'password'} name={'password'} />
        <Button name={'Отправить форму'} type={'submit'}  />
      </form>
    );
  }
  