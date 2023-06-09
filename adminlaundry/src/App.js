import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./component/PageNotFound";
import PrivateRoute from "./component/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import UserDetail from "./pages/UserDetail";
import TransactionCard from "./component/TransactionCard";
import UserDelivery from "./pages/UserDelivery";
import UserLaundry from "./pages/UserLaundry";
import UserProcessed from "./pages/UserProcessed";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./component/Footer";
import CardUserDetail from "./component/CardUserDetail";

function App() {

  const [ users, setUsers ] = useState([]);
  const [ status, setStatus ] = useState([]);
  const [ processLaundry, setProcessLaundry ] = useState([]);
  const [ processCourier, setProcessCourier ] = useState([]);
  const [ processed, setProcessed ] = useState([]);

  const [ isHaveToken, setIsHaveToken ] = useState(false);

 


  const getAllUser = async ()=> {
   
    try {

      const token = localStorage.getItem("token");
      const url = `http://localhost:8080/client/users/`;
      const config = {headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${token}`}}
      const { data, status } = await axios.get (url, config, config);
      
      if(status ===200){
  
        //allusers
        let clients = data.filter(user => user.role === "Client" || user.role === "client" );
        setUsers(clients);
      }

    } catch (error) {
      console.log(error);
    }
  }

 

  

  const processReq = async()=>{
    try {
      const token = localStorage.getItem("token");
      const url = `http://localhost:8080/client/alldetailcucian`;
      const config = {headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${token}`}}
      const { data, status } = await axios.get (url, config, config);
      
      if(status ===200){ 
 
        let onCourier = data.filter(objek => objek.status === "Sedang Menjemput Baju" );
        setProcessCourier(onCourier);
        
        let onLaundry = data.filter(objek => objek.status === "Sedang Diproses Laundry");
        setProcessLaundry(onLaundry);

        let onFinished = data.filter(objek => objek.status === "Selesai");
        setProcessed(onFinished);
        // setProcessCourier(onCourier);
      }

    } catch (error) {
      console.log(error);
    }

  }

  

  const checkToken = ()=>{
    const token = localStorage.getItem("token");
    if (!token){
        setIsHaveToken(false);
        }else {
          setIsHaveToken(true);
        };
    }

    useEffect(()=>{
      checkToken();
      
    },[checkToken])





    useEffect(()=>{

      getAllUser();
    },[])

    useEffect(()=>{
      processReq();
    }, [processReq])

   



 

  return (

    <div>
      <Navbar isHaveToken={isHaveToken} />
     <Routes>
        <Route path="/home" 
        element=
        {
        <PrivateRoute >
         <Dashboard 
         users={users} 
         processCourier={processCourier}
         processLaundry={processLaundry} 
         processed={processed}/>
        </PrivateRoute>
        } />
        
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<UserDetail />} />
        {/* <Route path="/user/transaksi" element={<TransactionCard users={users} />} /> */}
        <Route path="/user/detail" element={<CardUserDetail/>} />
        <Route path="/user/pengantaran" element={<UserDelivery processCourier={processCourier} />} />
        <Route path="/user/prosescuci" element={<UserLaundry processLaundry={processLaundry}  />} />
        <Route path="/user/selesai" element={<UserProcessed processed={processed} />} />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
