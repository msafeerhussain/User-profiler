import React , {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props)=>{

 const [enteredUsername,setEnteredUsername]= useState('');
 const [enteredAge,setEnteredAge]= useState('');
 const [error, setError] = useState();
  const addUserHandler = (event) =>{
    event.preventDefault();
    if(enteredUsername.length === 0 || enteredAge.length ===0){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if(+enteredAge <1){
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername , enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };
  const UsernameChangeHandler = (event)=>{
    setEnteredUsername(event.target.value);
  };
  const AgeChangeHandler = (event)=>{
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  
    return (
      <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id='username' value={enteredUsername} type="text"  onChange={UsernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id='age' value={enteredAge} type="number" onChange={AgeChangeHandler} />
        <Button type="submit">Add User</Button>
      
    </form>
    </Card>
    </div>
  )
}

export default AddUser
