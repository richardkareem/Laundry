import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, Navigate } from 'react-router-dom';

const Card = ({user}) => {

    const handlerDetailTrans = ()=>{
      return <Navigate to={"/user/detail"}></Navigate>
    }

   
    return (     
    <div className="card">
        <div className="card-header">
            {user.name}
        </div>
        <div className="card-body">
            <p>Alamat: {user.alamat}</p>
            <p>Username: {user.username} </p>
            <p>Role: {user.role} </p>
            <button>
                <NavLink to={"/user/detail"} state={user.transaksi} > click  </NavLink>
            </button>
            {/* <NavLink 
            to={"/user/transaksi"} 
            onClick={()=>{ fetchTransaksiUser(user.id) }}
            state={transaksi}
            > Riwayat Transaksi </NavLink> */}
        </div>
    </div>
    );
}

export default Card;
