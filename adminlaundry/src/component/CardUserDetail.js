import React from 'react';
import { useLocation } from 'react-router-dom';

const CardUserDetail = () => {
   const location = useLocation();
   const { state } = location;
   console.log(state);

   state.map(user => console.log(user.pilihan_kurir));
   
    return (
     <div>
        {state.map(user =>{
            return (
                <div key={user.idTrans} className="card">
        <div className="card-header">
            ID Transaksi: {user.idTrans}
        </div>
        <div className="card-body">
            <p>Date: {user.date}</p>
            {user.pilihan_Kurir ? (<p style={{color: "#00FF00"}} >Menggunakan Kurir</p> ): (<p style={{color:"red"}}>Tidak Menggunakan Kurir</p>)}
            {user.daoDetailCucians.map(detail => (
                <p> {detail.status} </p>
            ))}
        </div>
    </div>
            )
        })}
     </div>
    );
}

export default CardUserDetail;
