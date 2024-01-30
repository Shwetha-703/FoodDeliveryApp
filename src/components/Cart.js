import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice';
import CategoryList from './CategoryList';

const Cart = () => {
  const cartItems = useSelector((store)=>store.cart.items);

  const dispatcher = useDispatch();

  const handleClear = ()=>{
    dispatcher(clearCart());
  }

  if(cartItems.length===0)
    return (
      <div className='justify-center border rounded-md p-4 m-4'>
      <div className="w-6/12 justify-center border rounded-md p-4 m-auto text-center" id="menu">    
            <h2 className="text-2xl font-bold">Sorry, no items in your cart..</h2>
        </div>
      </div>
    )
  return (
    <div className='justify-center border rounded-md p-4 m-4'>
      <div className="w-6/12 m-auto justify-center border rounded-md p-4 text-center" id="menu">    
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button onClick={handleClear} className=" px-2 py-1 bg-orange-600 rounded-md">Clear</button>
            <CategoryList items={cartItems}/>
        </div>
    </div>
    
  )
}

export default Cart
