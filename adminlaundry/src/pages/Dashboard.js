import React, { useEffect, useState } from 'react';
import "./dashboard.css";
import axios from 'axios';
import Card from '../component/Card';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Dashboard = ({users, processCourier, processLaundry, processed}) => {

    return (
        <div>
          <div className="card">
            <div className="card-header">
              Akun Terdaftar
            </div>
            <div className="card-body">
              <p>Akun: {users.length}</p>
              <NavLink to ={{
                pathname:"/user" }} state={users}
                > More Details </NavLink>
            </div>
          </div>

                {/* courier */}
          <div className="card">
            <div className="card-header">
              Pengantaran
            </div>
            <div className="card-body">
              <p> pengantaran: {processCourier.length}</p>
              <NavLink to={{
                pathname:"/user/pengantaran" }} state={processCourier}
                > More Details </NavLink>
            </div>
          </div>

                {/* Pencucian */}
          <div className="card">
            <div className="card-header">
              Pencucian
            </div>
            <div className="card-body">
              <p> pencucian: {processLaundry.length}</p>
              <NavLink to={{
                pathname:"/user/prosescuci" }} state={processLaundry}
                > More Details </NavLink>
            </div>
          </div>

                {/* Selesai */}
          <div className="card">
            <div className="card-header">
              Selesai
            </div>
            <div className="card-body">
              <p> Selesai: {processed.length}</p>
              <NavLink to={{
                pathname:"/user/selesai" }} state={processed}
                > More Details </NavLink>
            </div>
          </div>

      
        </div>
       
    );
}

export default Dashboard;
