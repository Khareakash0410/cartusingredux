import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, increaseQuantity } from '../store/cartSlice';

const Home = () => {

    const [allProducts, setAllProducts] = useState([]);

    // console.log(allProducts);

    let cartSlice = useSelector((state) => state.cart);
    console.log(cartSlice.cartArr)

 async function getAllData(){
    let res = await fetch('https://dummyjson.com/products');


    let data = await res.json();

    console.log(data.products);

    const updatedData = data.products.map(item => {
        return { ...item, quantity: 1 }; 
      });
  

    setAllProducts(updatedData);
  }

  useEffect(() => {
    getAllData()
  },[]);

  let dispatch = useDispatch();



const handleClick = (ele) => {
  console.log(ele);
  cartSlice.cartArr.some((x) => x.title === ele.title) ? dispatch(increaseQuantity(ele)) : dispatch(add(ele));
  }
 



  return (
    <div className='flex flex-col items-center bg-yellow-100 gap-4'>
      {/* <h2>This is Home page</h2> */}

     {
allProducts.map((ele, index) => {
    return  <div className=' w-72 h=4/6 px-2 py-1 bg-green-200  mt-3 border-2 border-black' key={index}>
        <h2>{ele.title}</h2>
        <img className='w-full h-4/6' src={ele.thumbnail} alt="" />
        <p>{ele.description}</p>
        <div className='flex justify-around mt-1'>  <button className=' w-20 border-2 h-8 border-black bg-red-100 rounded-md text-sm'>Read More</button>
        <button onClick={() => handleClick(ele)} className='w-20 border-2 border-black bg-red-100 rounded-md h-8 text-sm'>Add to Cart</button>
        </div>
    </div> 
})
     }
    </div>
  )
}

export default Home
