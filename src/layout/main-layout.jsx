import React from 'react'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { Outlet } from 'react-router-dom'
export const MainLayout = () => {
  return (
    <div className=" h-screen flex justify-between flex-col text-5">
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
        <Footer/>
    </div>
  )
}
