import React, { useEffect, useState } from 'react';
import ApiService from '../services/api.sevice'
import UsersListView from './Users.listView';

export default function UsersMainView() {
    const [usersList, setUsersList] = useState();
    useEffect(() => {
        getUserList();
    }, []);

    function getUserList() {
        ApiService.getUserList()
            .then((response) => {
                setUsersList(response.data) 
            }).catch((error) => {
                console.log(error);
                return error;
            });
    }

    return (
        usersList ?
            <div className="wrapper">
                <UsersListView usersList={usersList} />
            </div> : null
    )
}



