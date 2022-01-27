import React, { useState } from "react";
// this is called lifting the State, we are using both the component(Adduser and userlist)
// here so we have direct accses to them. we can manage the sate for both from here.

import AddUser from "./componenets/Users/AddUser";
import UserList from "./componenets/Users/UserList";

function App() {
  const [userList, setuserList] = useState([]);

  //iss function me uName aur uAge props ke throough ayenge AddUser wali file me lage addUserHandler function ke props se
  const onAddUserHandler = (uName, uAge) => {
    setuserList((prevUSerList) => {
      // {/* ye name aur age map hua hai UserList.js ke list me */}
      return [
        ...prevUSerList,
        { name: uName, age: uAge, id: Math.random.toString() },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList manyusers={userList} />
    </>
  );
}

export default App;
