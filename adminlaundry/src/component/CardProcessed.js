import React from 'react';

const CardProcessed = ({trans}) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
    console.log(trans);
    return (
        <div className="card">
            <div className="card-header">
                ID Transaksi: {trans.id} 
            </div>
            <div className="card-body">
                <p>Harga Paket: { formatter.format( trans.pembayaran)}</p>
                <p>Jenis Barang: {trans.jenis_barang} </p>
                <p>Berat Barang: {trans.berat_barang} </p>
                <p>status: {trans.status} </p> 
            </div>
        </div>
    );
}

export default CardProcessed;
