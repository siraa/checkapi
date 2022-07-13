import React from 'react';
import { useState, useEffect } from "react";
import CardUser from "./CardUser"
import axios from 'axios'


const UserList = () => {

    const [listUser, setListUser] = useState([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then ((res) => res.data)
      .then(listUser=> setListUser(listUser))
      .catch(console.error());
      
  }, []) ;
    
  return (
    <div>
      { listUser.map((user, index)=> (
            <div key={index} >
                <CardUser user={user}/>
            </div>
            ))}
    </div>
  )
}

export default UserList