import React from 'react'
import './Header.css';
import FastFoodIcon from '@mui/icons-material/FoodBankRounded';
import { AppBar } from '@mui/material/';
const Header = () => {
    return (
        <>
             <header className="App-header">
         <AppBar position='relative' style={{background:'red',height:'8rem'}}>
      
  <div className="heading-logo">
         <FastFoodIcon className='icon' color="Success" fontSize='large'/>
         <div className="heading-subheading">
          <h1 style={{cursor:'pointer'}}>Recipes Den
 
  </h1>
  <small>Get Recipes of your favourite Ingredients!</small>
  </div>
  </div>     
         
         </AppBar>
         
         </header>
        </>
    )
}

export default Header
