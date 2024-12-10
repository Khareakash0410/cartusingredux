import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

 let cartSlice  = useSelector((state) => state.cart)
 console.log(cartSlice.cartArr)

  return (
    <div>
      <ul className='flex gap-2 w-full p-3 bg-slate-200 items-center'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/cart'}>Cart <sup>{cartSlice.cartArr.length}</sup></Link></li>
      </ul>
    </div>
  )
}

export default Navbar