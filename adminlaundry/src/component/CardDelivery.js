import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const CardDelivery = ({trans}) => {
 
   
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
      });

      const setStatus = async() =>{
    //    console.log(trans.id);
        try {
           
            const url = `http://localhost:8080/client/detail-cucian/${trans.id}`
            const token = localStorage.getItem("token");
            const body = { 
                pembayaran: trans.pembayaran,
                status: "Sedang Diproses Laundry" }
            const config = {
                 headers: {
                "Content-type" : "application/json",
                Authorization: `Bearer ${token}`}} ;
                
                 
            const {data, status} =  await axios.put (url, body, config);
            if(status === 200){
              
              Swal.fire({
                icon: "success",
                title: 'Sukses',
                text: `Berhasil Mengganti Status`,
              })
     
            }
        } catch (error) {     
         console.error(error); 
            
        }
    }

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
                     onClick={setStatus}
                     > Cuci Baju </button>
                 </div>
             </div>
            
     
    );
}

export default CardDelivery;
