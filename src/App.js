import React , {useState} from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';


function App() {

 const [UsersList , SetUsersList] =useState([]);
 const addUserHandler=(uName , uAge)=>{
  SetUsersList((prevUserList)=>{
    return [...prevUserList , 
    {name : uName , age: uAge , id: Math.random().toString()}];
  });
 }
  return (
    <div>
        <AddUser onAddUser = {addUserHandler} />
        <UserList users={UsersList}/>
    </div>
  );
}

export default App;
