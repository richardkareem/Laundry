import React from 'react';
import { useLocation } from 'react-router-dom';
import CardProcessed from '../component/CardProcessed';

const UserProcessed = ({processed}) => {
  
    return (
        <div>
            {processed.map((trans)=>(
                <CardProcessed key={trans.id} trans={trans} />
            ))}
        </div>
    );
}

export default UserProcessed;
