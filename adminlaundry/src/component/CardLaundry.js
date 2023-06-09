import axios from 'axios';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const CardLaundry = ({trans}) => {
    console.log(trans);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

    const setStatus = async(id, pembayaran) =>{
        try {
           
            const url = `http://localhost:8080/client/detail-cucian/${id}`
            const token = localStorage.getItem("token");
            const body = { 
                pembayaran: pembayaran,
                status: "Selesai" }
                 const config = {
                 headers: {
                "Content-type" : "application/json",
                Authorization: `Bearer ${token}`}} ;
                
                 
            const {data, status} =  await axios.put (url, body, config);
            if(status === 200){
                Swal.fire({
                    icon: "success",
                    title: 'Sukses',
                    text: `Berhasil Memindahkan Status`,
                  })
     
            }
        } catch (error) {     
         console.error(error); 
            
        }
    }
    
    useEffect(()=>{
        
    },[])

    return (
       
            <div className="card">
                 <div className="card-header">
                    ID Transaksi: {trans.id}
                 </div>
                 <div className="card-body">
                     <p>Harga Paket: {formatter.format(trans.pembayaran)}</p>
                     <p>Jenis Barang: {trans.jenis_barang} </p>
                     <p>Berat Barang: {trans.berat_barang} </p>
                     <p>status: {trans.status} </p> 
                     <button 
                     onClick={() => { setStatus(trans.id, trans.pembayaran)}}
                     > Selesai </button>
                 </div>
             </div>

    );
}

export default CardLaundry;
