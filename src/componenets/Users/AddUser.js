import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from '../UI/ErrorModel';
;


function AddUser(props) {
  const [EnteredUser, setEnteredUser] = useState("");
  const [EnteredAge, setEnteredAge] = useState("");
  const [Error, setError] = useState();

  const addUserHandler = (event) => {
    // ye fn. form submit hone pe chalega
    event.preventDefault();
    if(EnteredUser.trim().length===0 || EnteredAge.trim().length===0){
      setError({
        title : "Invalid Input",
        message : "Please enter a valid Name and Age (Non -empty values)"
      })
      return;
    }
    if(+EnteredAge < 1){
      setError({
        title : "Invalid Age",
        message : "Please enter a valid Age (Age can't be 0 or Negative)"
      })
      return;
    }
    // ye props.onAddUser ke through hm yha se text field me enterd user details bhej rhe hai APP.js file me 
    props.onAddUser(EnteredUser, EnteredAge)
    console.log(EnteredUser,EnteredAge);
    // ye form submit hone ke baad user aur age wale text field ko empty kar dega
    setEnteredUser('')
    setEnteredAge('')
  };

  const userHandler =(event)=> {
    // ye user wale text box me likhi chijo ko set/save karega
    setEnteredUser(event.target.value)
  }
  const ageHandler =(event)=> {
    // ye age wale text box me likhi chijo ko set/save karega
    setEnteredAge(event.target.value)
  }

  const errorHandler =()=>{
    setError(null);
  }

  return (
    <div>
     {Error && <ErrorModel title={Error.title} message={Error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" value={EnteredUser} onChange={userHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="username" type="number" value={EnteredAge} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>   
  );
}
export default AddUser;
