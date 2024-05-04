//@ts-nocheck
import { useState, useContext } from 'react';
import { useUsers } from './UsersContext';




const Component13child = () => {

  const users = useUsers();
 

  return (

    <div className='wrapper'>
      <ul>
      {users.map(user => (
        <li key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </li>
      ))}
    </ul>

    </div>
  )
}


export default Component13child;

