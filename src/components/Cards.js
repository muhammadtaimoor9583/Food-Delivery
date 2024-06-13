import React, { useState } from 'react'
import { useCart,useDispatchCart } from './ContextReducer';

export default function Cards(props) {
    const dispatch=useDispatchCart();
    const state=useCart();
    let size_options=Object.keys(props.options);
    const [size,setSize]=useState(size_options[0]);

    const [qty,setQty]=useState(1);
    const [size_price,setSizePrice]=useState(props.options[size_options[0]]);
    const [price,setPrice]=useState(qty*parseInt(props.options[size_options[0]]));

    const handleSizeChange=(e)=>{
        let opt=e.target.value;
        setSize(opt);
        setSizePrice(props.options[opt]);
        setPrice(qty*parseInt(props.options[opt]));
    }
    const handleQtyChange=(e)=>{
        let curr_qty=e.target.value;
        setQty(curr_qty);
        setPrice(curr_qty*size_price);
    }

    const handleAddToCart=async ()=>{
        let food=[];
        for(const item of state){
            if(item.id === props.foodItem._id && item.size === size){
                food=item;
                break;
            }
        }
        if(food.length !== 0 ){
            
            await dispatch({type:"UPDATE",id:props.foodItem._id,qty,size,price})

        }
        else
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,img:props.foodItem.img,description:props.foodItem.description,qty,size,price})
        
    }



    return (
        <div className='container my-5'>
            <div className="card" style={{width: "18rem"}}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={ {"height": "250px",objectFit:'fill'}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">{props.foodItem.description}</p>
                <select className='bg-success' value={qty} onChange={handleQtyChange}>
                    {
                        Array.from(Array(6),(e,i)=>{
                            return(
                                <option key={i} value={i+1}>{i+1}</option>
                            )
                        })
                    }
                </select>
                <select className='bg-success mx-3' value={size}  onChange={handleSizeChange} >     
                        {
                            size_options.map(data=>
                                {return(
                                    <option key={data} value={data}>{data}</option>
                                )
                                }
                            )
                        }
                </select>
                <span className='fs-5'><b>Rs.</b><span className='text-danger'>{price}/-</span></span>
                <hr/>
                <div className='btn bg-success text-white fs-5' onClick={handleAddToCart}> Add to Cart</div>
                </div>
            </div>
        </div>
    )
}
