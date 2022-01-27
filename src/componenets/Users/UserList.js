import React from 'react';
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return(
    <Card className={classes.users} >
    <ul>
        {/* map exicute a function on each and every element of "manyusers" array */}
        {props.manyusers.map((user) => (
            // ye key use ki gayi hai taki react koi each child should have unique key ki warning na de
            <li key={user.id}>
                {/* ye name aur age map hua hai App.js ke onAddUserHandler function me setuserList */}
                {user.name} ({user.age} Years of age.)
            </li>          
        ))}
    </ul>
   </Card>
  );
}

export default UserList;
