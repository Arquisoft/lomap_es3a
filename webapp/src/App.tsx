import {User} from './shared/shareddtypes';
import {getUsers} from './api/api';
import React, {useEffect, useState} from 'react';
import './App.css';
import ViewPaths from "./components/ViewPaths";

function App(): JSX.Element {

    const [users, setUsers] = useState<User[]>([]);

    const refreshUserList = async () => {
        setUsers(await getUsers());
    }

    useEffect(() => {
        refreshUserList();
    }, []);

    return (
        <div>
            <ViewPaths/>
        </div>
    );
}

export default App;
