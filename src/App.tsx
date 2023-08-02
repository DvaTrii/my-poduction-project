import { Suspense, useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'


function App() {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
        <Link to='/'>Main</Link> 
        <Link to='/about'>About</Link> 
        <Suspense fallback={<div>🌀 Loading...</div>}>
            <Routes>
                <Route path='/' element={<MainPageLazy/>}/>
                <Route path='/about' element={<AboutPageLazy/>}/>
            </Routes>
        </Suspense>
        
    </div>
  )
}

export default App