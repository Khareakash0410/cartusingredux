import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, remove } from '../store/cartSlice';


const Cart = () => {

    let cartSlice =  useSelector((state) => state.cart)
   
    console.log(cartSlice.cartArr);


// const [arr, setArr] = useState(cartSlice.cartArr);


let dispatch = useDispatch();

    const handleDelete = (ele,index) => {
       console.log(ele)

    //    let copyArr = [...arr];

    //    copyArr.splice(index, 1);

    //    console.log(copyArr);   

    dispatch(remove(ele,index));

    //    setArr(copyArr);
    }

    // let length = arr.length;
const handleIncrement = (ele,index) => {
     console.log(ele);
     dispatch(increaseQuantity(ele,index))
}
const handleDecrement = (ele, index) => {
     console.log(ele);
     dispatch(decreaseQuantity(ele,index))
}

    
  return (
    <div className='flex flex-col'>
      {
       cartSlice.cartArr.map((ele,index) => {
            return <div key={index} className='flex justify-around items-center border-2 border-black rounded-md my-4 '>
             <div>{index+1}.</div>
               <div>{ele.title}</div>
               <div><img src={ele.thumbnail} alt="" /></div>


               <div className='flex flex-col items-center justify-between gap-8'>
                <div><button onClick={() => handleDelete(ele,index)} className='m-1 p-1 rounded-md border-2 border-black bg-red-400'>Delete</button></div>
                <div className='flex justify-around items-center gap-10'>
                    <div><button onClick={() => handleIncrement(ele, index)} className='border-2 text-center border-black rounded-lg w-5 bg-gray-400'>+</button></div>{ele.quantity}
                    <div><button onClick={() => handleDecrement(ele, index)} className='border-2 text-center border-black rounded-lg w-5 bg-gray-400'>-</button></div>
                </div>
               </div>
            </div>
        })
      }

   
    </div>
  )
}

export default Cart
