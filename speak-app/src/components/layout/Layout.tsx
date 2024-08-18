import React from "react";
import Header from "../header/Header";
import style from './layout.module.css'
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <div className={style.page}>
        <Header />
        <main className={style.main}>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
