import React from 'react'
import { useCart } from '../components/ContextReducer'
import Delete from '@mui/icons-material/Delete';

import { useDispatchCart } from '../components/ContextReducer'
export default function Cart() {
    const data = useCart();
    const dispatch = useDispatchCart();
    const total_price = data.reduce((total, food) => { return total + food.price }, 0);

    const handleCheckOut= async ()=>{
        const email=localStorage.getItem('email');
        const response=await fetch('http://localhost:4000/orderdata',{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify({
                email:email,
                order_data:data,
                order_date:new Date().toDateString()
            })
        })
        console.log('Order response: ',response);
        if(response.status === 200){
            dispatch({type:'DROP'});
        }

    }
    return (
        <>
        { data.length ? 
        <div>
            <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
                <table className='table table-hover'>
                    <thead className=' text-success fs-4'>
                        <tr>
                            <th scope='col' >#</th>
                            <th scope='col' >Name</th>
                            <th scope='col' >Quantity</th>
                            <th scope='col' >Option</th>
                            <th scope='col' >Amount</th>
                            <th scope='col' ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((food, index) => {

                                return (
                                    <tr>
                                        <th scope='row' >{index + 1}</th>
                                        <td >{food.name}</td>
                                        <td>{food.qty}</td>
                                        <td>{food.size}</td>
                                        <td>{food.price}</td>
                                        <td ><button type="button" className="btn p-0"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <div><h1 className='fs-2'>Total Price: {total_price}/-</h1></div>
                <div>
                    <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
                </div>

            </div>

        </div> : <div className='fs-1 text-center'>"No item in Cart"</div>
                    }
    </>
    )
}
