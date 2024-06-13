import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import {useCart} from './ContextReducer'
import Modal from '../Modal';
import Cart from '../screens/Cart';
export default function Navbar() {
    const [cartVeiw,setCartVeiw]=useState(false);
    const data=useCart();
    const handleLogOut=()=>{
        localStorage.removeItem('authToken')
        localStorage.removeItem('email')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            {
                                (localStorage.getItem('authToken')) ?
                                    <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Orders</Link>
                                    : ""
                            }

                        </ul>
                        {
                            (!localStorage.getItem('authToken')) ?
                                <div className='d-flex'>
                                    <Link className="btn bg-white text-success mx-3" to="/login">Login</Link>
                                    <Link className="btn bg-white text-success mx-3" to="/createuser">SignUp</Link>
                                </div>
                                : <div className='d-flex'>
                                    <div className="btn bg-white text-success mx-3"  onClick={()=>setCartVeiw(true)}>
                                    My Cart  {"  "}
                                    <Badge pill bg="danger">{data.length}</Badge>
                                    </div>
                                    {
                                        cartVeiw ? <Modal onClose={()=>setCartVeiw(false)}><Cart/></Modal> : null
                                    }
                                    <Link className="btn bg-white text-danger mx-3" to="/login" onClick={handleLogOut} >Log Out</Link>
                                </div>
                        }
                    </div>
                </div>
            </nav>

        </div>
    )
}
