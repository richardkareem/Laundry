import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../component/Card';
import axios from 'axios';

const UserDetail = () => {
    const location = useLocation();
    const { state } = location;
    // console.log(state);

    return (
        <div>
            {state.map((user)=>(
                <Card key={user.id} user={user}/>
            ))}
        </div>
    );
}

export default UserDetail;
