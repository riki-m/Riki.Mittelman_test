import React, { useEffect, useState } from 'react';
import UsersListItem from './Users.ListItem';
import './UserList.css'

export default function UsersListView({ usersList, saveNewuser }) {
    const [searchValue, setSearchValue] = useState('');
// input to filter the datas
    const getHeader = () => {
        return (
            <div className='row justify-content-between'>
                <div className='col-auto d-flex'>
                    <input
                        className='input-group mb-3'
                        icon='search'
                        placeholder='Search By Name/ Email'
                        onChange={(event) => setSearchValue(event.target.value)}
                    />

                </div>
            </div>
        );
    }

    const getTitles = () => {
        return (
            <div className='row table-title-border'>
                <div className='col-4'>Name</div>
                <div className='col-4'>Email</div>
                <div className='col-4'>Company Name</div>
            </div>
        );
    }
    const listToDisplay = () => {
        if (searchValue) {
            return usersList.filter(user =>
                user.name.includes(searchValue) || user.email.includes(searchValue))
        }
        return usersList;
    }
    const list = listToDisplay() || [];
    return (
        <div>
            <label>Filter:</label>
            {getHeader()}
            <table class="table">

                <thead class="table table-dark table-sm">
                    {getTitles()}
                </thead>

                {list.map(user =>
                    <tbody>
                        <UsersListItem userItem={user} />
                    </tbody>
                )}
            </table>
        </div>
    )
}











