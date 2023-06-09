import { NavLink, Navigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import instance from "../config/api";
import "./Register.css"
import axios from "axios";
import Swal from "sweetalert2";

const RegisterPage = () => {
   
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [isFill , setIsFill] = useState(false);

  const tes=()=>{
    Swal.fire('Berhasil Membuat Akun, Mohon Login Terlebih Dahulu');
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
  
    try {
      const url = "/register"
      const body = { 
      alamat: address,
      name: fullName,
      role: role,
      username : username,
      password : password };
      const config = { "Content-type" : "application/json" };
      const {data, status} =  await instance.post(url, body, config);
      if(status === 200 ){
                Swal.fire({
                  icon: "success",
                  title: 'Sukses Register',
                  text: `Silahkan Login Terlebihdahulu 🙏`,
                })
        setIsFill(true);
         
        
      }else{
      

          console.log("password salah");
      }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: 'Gagal Register',
      text: `Password harus lebih dari 6 dan berupa angka besar dan nomor 😭`,
    })
    console.error(error);
    
      
      
  }


  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <div className="input-container">
          <label htmlFor="full-name-input">Nama Lengkap: <h7 style={{color:"red"}}>*</h7></label>
          <input
            id="full-name-input"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="address-input">Alamat: <h7 style={{color:"red"}}>*</h7> </label>
          <textarea
            id="address-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="username-input">Username: <h7 style={{color:"red"}}>*</h7></label>
          <input
            id="username-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password-input">Password: <h7 style={{color:"red"}}>*</h7></label>
          <input
            id="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p>Sudah Mempunyai akun admin?</p>
        <div className="wrapnav" >
         <NavLink to={"/login"} className="registerText" >Login</NavLink>
        </div>
        <button >Daftar</button>
      
      </form>
    </div>
  );
}

export default RegisterPage;
