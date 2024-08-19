import React from 'react'
import style from './headers.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks';
import { links } from './links';


export default function Header() {
  const { user} = useAppSelector(state => state.user);
  const location = useLocation();
  return (

    <header className={style.header}>
      {user.username ? (
        <>
        {/* {products.length> 0 && <span>{products[0].title}</span>} */}
      {links.map((el, index) => (
        <Link
          key={index}
          className={location.pathname === el.pathname ? style.active : ''}
          to={el.pathname}>{el.title}</Link>
      ))}
        
        </>
      ) : (
        <Link to='/login'>Login</Link>
      )}

    </header>
   
  )
}
