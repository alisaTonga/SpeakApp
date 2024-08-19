import { useFormik } from 'formik';
import style from './login.module.css'
import { useAppDispatch } from '../redux/hooks';
import { loginUser } from '../features/auth/authAction';


export interface ILoginFormValues {
    username: string
    password: string
}

export default function Login() {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
          email: ''
        } as ILoginFormValues,
        onSubmit: (values: ILoginFormValues, { resetForm }) => {
          console.log(values);
          dispatch(loginUser(values))
          resetForm();
        }
      });
  return (
    <div>
      <div></div>
        <form onSubmit={formik.handleSubmit} className={style.loginForm}>
        <label>Login 🔐</label>

        <input value={formik.values.username} name='username' onChange={formik.handleChange} type="text" placeholder='ussername' />
        <input value={formik.values.password} name='password' onChange={formik.handleChange} type="text" placeholder='password' />
       
        <button type='submit'>отправить</button>
      </form>
      <span className={style.errors}>{formik.errors.username}</span>
      <span className={style.errors}>{formik.errors.password}</span>

    </div>
  )
}
