import { NavLink, Navigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import instance from "../config/api";
import Swal from "sweetalert2";
import "./Register.css"



const LoginPage = () => {
    
    const [ password, setPassword ] = useState("");
    const  [ isAdmin, setIsAdmin ] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [ username, setUsername ] = useState("");

    const location = useLocation();
    // console.log(location);

  

    const loginApi = async(e)=>{
        e.preventDefault()  ;
        console.log(username, password);

        console.log("Sudah Di Click");
        try {
            const url = "/login"
            const body = { username:username, password:password };
            const config = { "Content-type" : "application/json" };
            const {data, status} =  await instance.post(url, body, config);
            if(status === 200 && data.role=== "Admin"){
                setIsAdmin(true);
                localStorage.setItem("token", data.token);
                localStorage.setItem("name", data.name);
                console.log(isCorrect);

                Swal.fire({
                  icon: "success",
                  title: 'Sukses Login',
                  text: `Silahkan Masuk Admin ${username} 😽 `,
                })
             
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Upps 🤭...',
                text: 'Cuman Admin yang bisa login 🤭',
              })
            }
        } catch (error) {
          setIsCorrect(true);
          console.error(error);
          console.log("password salah");

          Swal.fire({
            icon: 'error',
            title: 'Upps 🤭...',
            text: '"Username Atau Password Salah 😥"',
          })
            
            
        }
    

    }

    // useEffect(()=>{
    //   console.log(isCorrect);
    // },[])
    

    return (
      <div className="register-form-container">
      <form onSubmit={loginApi}>
        <h1>Login</h1>
        <div className="input-container">
          <label htmlFor="full-name-input">Username </label>
          <input
            id="full-name-input"
            type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
           
          />
        </div>
        <div className="input-container">
          <label htmlFor="password-input">Password </label>
          <input
            id="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p>Belum Mempunyai Akun Admin?</p>
        <div className="wrapnav" >
         <NavLink to={"/register"} className="registerText" >Register</NavLink>
        </div>
        <button >Masuk</button>
      
      </form>
    </div>
    );
}

export default LoginPage;
