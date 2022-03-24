import React,{useState} from 'react'
import './MainNavigation.css'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/BackDrop'

const MainNavigation = props => {
    const [drawer,setDrawer]=useState(false)

    const openDrawerHandler=()=>{
        setDrawer(true)
    }

    const closeDrawerHandler=()=>{
        setDrawer(false)
    }

  return (
      <>
      {drawer && <Backdrop onClick={closeDrawerHandler}/>}
      <SideDrawer show={drawer} onClick={closeDrawerHandler}>
          <nav className='main-navigation__drawer-nav'>
              <NavLinks/>
          </nav>
      </SideDrawer> 
    <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
           <span/>
           <span/>
           <span/>
        </button>
        <h1 className='main-navigation__title'><Link to="/">Place Finder</Link></h1>
        <nav className='main-navigation__header-nav'>
           <NavLinks/>
        </nav>
    </MainHeader>
    </>
  )
}

export default MainNavigation