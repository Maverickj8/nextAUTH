import React from 'react'

//Typescript 
interface User {
  id: number;
  name: string;
}
const UsersPage = async () => {
  // Here we use fetch to get data from the backend
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //  We use await because we are expecting a promise                                               
   const users: User[] = await res.json()

  return (
    <>
      <h1>Users</h1>
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li> )}
        </ul>
      
    </>
  )
}

export default UsersPage