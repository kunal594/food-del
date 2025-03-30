import React,{useContext} from 'react'
import './Cart.css'
import {StoreContext} from '../../context/StoreContext'
import {useNavigate} from 'react-router-dom';
const Cart = () => {
  const {cartItems,food_list, removeFromCart, getTotalCartAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    
    <div className='cart'>
      <div className="cart-items">
       <div className="cart-items-title">
       <p> Items</p>
       <p>Title</p>
       <p>Price</p>
       <p>Quantity</p>
       <p>Total</p>
       <p>Remove</p>
       </div>
<br />
<hr />
{food_list.map((item) => {
  // Safely retrieve the quantity from cartItems, defaulting to 0 if not found
  const quantity = cartItems[item._id] ?? 0;

  // Only render the item if its quantity is greater than 0
  if (quantity > 0) {
    return (
      <div key={item._id}> {/* Use item._id as the key */}
        <div className="cart-items-title cart-items-item">
          <img src={url + "/images/" + item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p>{quantity}</p>
          <p>${(item.price * quantity).toFixed(2)}</p> {/* Format total to 2 decimal places */}
          <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
        </div>
        <hr />
      </div>
    );
  }
  return null; // Return null if quantity is 0 or undefined, which avoids rendering empty divs
})}

      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
        <div>
     
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p>${getTotalCartAmount()}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>${getTotalCartAmount()===0?0:2}</p>
      </div>
      <hr />
      <div className="cart-total-details">
          <b>Total</b>
          <b>${getTotalCartAmount()===0?0: getTotalCartAmount()+2}</b>
      </div>
</div>
       <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
    </div>
    <div className="cart-promocode">
      <div>
        <p>If you have a promo code, Enter it here</p>
        <div className='cart-promocode-input'>
          <input type="text" placeholder='promo code'/>
          <button>Submit</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  
)
}

export default Cart