import React,{  createContext, useContext, useReducer } from "react";

const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,description:action.description,img:action.img,qty:action.qty,size:action.size,price:action.price}];
        
        case "REMOVE":
            
                let newArr=[...state];
                newArr.splice(action.index,1);
                return newArr;
            
        case "UPDATE":
            let arr=[...state];
            arr.find((food,index)=>{
                if(food.id === action.id && food.size === action.size){
                    arr[index]={...food,qty: parseInt(food.qty)+parseInt(action.qty),price: parseInt(action.price)+food.price}
                }
            })
            return arr;
        case "DROP":
            return [];

        default:
            console.log("Error occur in reducer");
    }
}
export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[]);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);