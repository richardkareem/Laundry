import React from 'react';
import { useLocation } from 'react-router-dom';

import CardLaundry from '../component/CardLaundry';

const UserLaundry = ({processLaundry}) => {
    const location = useLocation();
    console.log(processLaundry);

    return (
        <div>
            {processLaundry.map((user)=>(
                <CardLaundry key={user.id} trans={user} />
            ))}
            
        </div>
    );
}

export default UserLaundry;

