import React from 'react';
import { useLocation } from 'react-router-dom';

const TransactionCard = () => {
    const location = useLocation();
    const trans = location.transaksi;
    console.log(location);
 

    return (
        <div>
            
        </div>
    );
}

export default TransactionCard;
