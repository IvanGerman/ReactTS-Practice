//@ts-nocheck
import { createContext, useContext, useState } from 'react';

const UsersContext = createContext(null);


export function UsersProvider({ children }) {
  const [users, setUsers] = useState(initialUsers)

  return (
  
    <UsersContext.Provider value={users}>
        {children}
    </UsersContext.Provider>
    
  );
}

export function useUsers() {
  return useContext(UsersContext);
}



const initialUsers = [
  { id: 0, name: 'John', age: 22 },
  { id: 1, name: 'Max', age: 23 },
];