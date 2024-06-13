import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MyOrder() {
    const [orders_data, setOrders] = useState([]);
    const email = localStorage.getItem('email');
    const fetchOrders = async () => {
        let response = await fetch('http://localhost:4000/myorderdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        response = await response.json();
        setOrders(response.order_data);
        console.log(response.order_data);
    }
    useEffect(() => {
        fetchOrders();
    }, [])
    return (
        <div>
            <Navbar />
            <div className='container m-3'>
                {
                    orders_data.length !==0 ? 
                    orders_data.slice(0).reverse().map(orders => {
                        return (
                            <div className='row mb-5'>

                                {orders.map(order => {
                                    return (
                                        <>
                                            {
                                                order.Order_date ? <div style={{margin:"auto",maxWidth:'100%'}}><div className='fs-5 mt-3'>{order.Order_date}</div><hr/></div> :
                                                    <div className='container my-5 col-12 col-md-6 col-lg-3'>
                                                        <div className="card" style={{ width: "18rem" }}>
                                                            <img src={order.img} className="card-img-top" alt="..." style={{ "height": "250px", objectFit: 'fill' }} />
                                                            <div className="card-body">
                                                                <h4 className="card-title">{order.name}</h4>
                                                                <div className='d-flex' style={{justifyContent:'space-between'}}>
                                                                <span className="card-text"><b>Quantity: </b>{order.qty}</span>
                                                                <span className="card-text"><b>Size: </b>{order.size}</span>

                                                                </div>
                                                                <p className="card-text mt-3 text-danger"><b>Price: </b>{order.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </>
                                    )
                                })
                                }
                            </div>
                        )
                    })
                    : <div className='fs-5 text-center'>You have No Orders</div>
                
                
                }
            </div>


            <Footer />
        </div>
    )
}
