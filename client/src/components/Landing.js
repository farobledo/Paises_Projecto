import React from 'react'
import {NavLink} from 'react-router-dom'
import intro from '../img/fondo.gif'
import Foto from '../img/icono.webp'
import './Landing.css'


function Landing() {
  return (
    <div className='landing'>
      
     <div className='description'>
        <h1>COUNTRIES</h1>
        
        <NavLink  to={'/home'}>
         <img className='btn' title='Entrar' src={Foto} />
        </NavLink>
       
        <p>Tdoso los derecho reservados Full Stack</p>
        
     </div>
      
      
      <img className='landing-img' alt='map all word' src={intro} />
      
      
    </div>
  )
}

export default Landing