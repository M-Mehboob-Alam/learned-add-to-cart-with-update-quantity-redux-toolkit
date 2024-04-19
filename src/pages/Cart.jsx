import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const {cart} = useSelector((state)=> state);
  console.log('displaying cart data');
  console.log(cart);
  const [totalItem, setTotalItem] =useState( 0) ;
  const [ totalPrice, setTotalPrice] = useState(0) ;

  useEffect(() => {
    setTotalItem(cart.length);
    setTotalPrice(cart.reduce((acc, item) => acc + item.sum, 0));
  }, [cart]);

 
  return (
    <div>
      {
        cart.length > 0 ? (
          <div className="container">

          <div className="row ">
            <div className="col-10 col-md-7">
          
               {
                cart.map((product) => (
                  <CartItem cart={cart} key={product.id} product={product} />
                ))
                }
         
            </div>
            <div className="col-12 col-md-4 shadow p-3 mx-2 ">
              <h1>Summary</h1>
              <h6><b>Total Item in Cart</b> <span className="text-danger">
                {
                  totalItem
                }
              </span></h6>
              <br />
              <h6><b>Total Amount</b> <span className="text-danger"> {
                totalPrice
              }</span> </h6>

              <button className="btn btn-block btn-success btn-lg">Checkout</button>
            </div>
          </div>
          </div>
         
        ) : (
          <div className="text-center">
            <Link to="/">
              <button className="btn btn-success">
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart