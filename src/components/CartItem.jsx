import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { remove,addQuantity, removeQuantity} from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';

const CartItem = ({product, cart}) => {
  const dispatch = useDispatch();
  

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.success('Removed from cart');
  }
  const plusQuantity = (id, quantity, e) => {
    console.log(id);
    console.log(quantity);
    console.log(e.target.value);
    const{ value} = e.target;
   
    console.log(value);
    dispatch(addQuantity(product.id, value));
   
  } 
  console.log(product);
  const minusQuantity = (e) => {
    const value = e.target.value;
    dispatch(removeQuantity([product.id, value]));
  }
  return (
    <div>
        <div className="row my-2 shadow py-4">
          <div className="col-2">
            <img src={product.image} height={100} width={100} className='img-fluid' alt="" />
          </div>
          <div className="col-10">
            <h6>{product.title}</h6>
            <p>{product.description}</p>
            <div className="row">
              <div className="col-12 col-md-4">

            <p>Price: <b>{product.price}</b> </p>
              </div>

              
              <div className="col-12 col-md-8">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <input type="number" id={product.id} value={product.quantity}  onChange={(e)=>{plusQuantity(product.id, product.quantity,e)}} className='form-control' />
                  </div>
                  <div className="col-12 col-md-6">
                    <button onClick={()=> removeFromCart(product.id)} className='btn btn-outline-dark'>Delete</button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItem