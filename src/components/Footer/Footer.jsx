import React from 'react'
import { AppBar,Container,Typography } from '@mui/material/';

import  './Footer.css'
const Footer = () => {
    return (
        <>
              <AppBar position="static" color="inherit" >
          <Container maxWidth="ex-lg" >
           
              <div className='footer'>
              <p>© 2021-Vishal Anthony </p>  
               <div className='icon-div'>
            
               <a href="https://github.com/Vishal-Cr" target="_blank"><i class="fab fa-github icon"></i></a>
           
             
               <a href="www.linkedin.com/in/vishalanthony-developer" target="_blank"><i class="fab fa-linkedin-in icon"></i></a>
           
          
               </div>
              
              </div>
             
         
          </Container>
        </AppBar>
        </>
    )
}

export default Footer
