import React from 'react';
import OtherUser from './OtherUser';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from 'react-redux';
// import store from '../redux/store';

function OtherUsers() {
    // Custom hook to fetch other users
    useGetOtherUsers();

    // Accessing OtherUsers from Redux store
    const otherUsers = useSelector((store) => store.user.otherUsers);
    // console.log(otherUsers)

    // Early return if OtherUsers is not yet fetched or empty
    if (!otherUsers) return; // Early return in react

    return (
        <div className='overflow-auto flex-1'>
            {
                otherUsers.map((user) => {
                    return (
                        <OtherUser key={user._id} user={user} />
                    );
                })
            }
        </div>
    );
}

export default OtherUsers;
