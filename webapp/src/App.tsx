import {User} from './shared/shareddtypes';
import './App.css';
import NavBar from './components/NavBar';
import Map from './components/Map';
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
        <header>
          <NavBar />
        </header>
        <main>
          <Map />
        </main>
      </div>
    </>
  );
}

export default App;
