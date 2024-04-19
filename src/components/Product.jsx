import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';
import { toast } from'react-toastify';

const Product = ({ product }) => {
  const descripton = product.description;
  const title = product.title;

  const {cart} = useSelector((state)=> state);
  // console.log('displaying cart data');
  // console.log(cart);
  const disptach = useDispatch();
  const addToCart = () => {
    const products = {
     
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        quantity: 1,
        sum: product.price,
      
    }
    disptach(add(products));
    toast.success('Added to cart');
  }
  const removeFromCart = () => {
    disptach(remove(product.id));
    console.log(product.id);
    toast.success('Removed from cart');
  }
  return (    
   
            <div className="col-12 col-md-3 col-sm-6 shadow p-3 m-1" key={product.id}>
                <h6>{title.slice(0,20)}...</h6>
                <img src={product.image} style={{ backgroundSize: 'contain', height: 200, width : 200 }} alt="" className="img-fluid" />
                <p>{ descripton.slice(0, 50)}..</p>
                <p>Price: <b>{product.price}</b> </p>
                
                 {
                  cart.some((item) => item.id === product.id)? (
                    <button onClick={()=> removeFromCart(product)} className='btn btn-outline-dark'>
                    Remove to cart
                   </button>
                  ) : (
                    <button onClick={()=> addToCart(product)} className='btn btn-outline-dark'>
                    Add to cart
                   </button>
                   
                  )
                 }
               
            </div>
       
  )
}

export default Product