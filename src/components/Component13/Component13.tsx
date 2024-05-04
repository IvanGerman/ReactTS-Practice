//@ts-nocheck
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import  './Component13.css';
import Component13child from './Component13child';
import { UsersProvider } from './UsersContext';




const Component13 = () => {

 

  return (

    <div className='wrapper'>

      <NavLink to="/" className='backToStartLink'>Go to StartPage</NavLink>
      Component13
      <UsersProvider>
        <Component13child/>
      </UsersProvider>
      

    </div>
  )
}


export default Component13;

