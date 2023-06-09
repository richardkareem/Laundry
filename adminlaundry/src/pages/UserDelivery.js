import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CardDelivery from '../component/CardDelivery';
import axios from 'axios';

const UserDelivery = ({processCourier}) => {
    console.log(processCourier);

   

    
    
    return (
        <div>
            {processCourier.map((trans)=>(
                <CardDelivery key={trans.id} trans={trans}  />
                 
            ))}
        </div>
    );
}

export default UserDelivery;
