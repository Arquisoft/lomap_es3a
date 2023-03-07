import {User} from './shared/shareddtypes';
import './App.css';
import Home from './components/home/Home';
import React, { useState, useEffect } from 'react';
import  {getUsers} from './api/api';


function App(): JSX.Element {

  const [users,setUsers] = useState<User[]>([]);

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
