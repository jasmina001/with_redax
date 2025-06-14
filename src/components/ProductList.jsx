
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addItem, clearCart } from '../features/cartSlice';
import './ProductList.css';

const ProductList = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sampleProduct = {
    id: Math.floor(Math.random() * 1000) + 3, 
    name: "New Product",
    price: 150,
  };

  return (
    <div className="container">
      <h2>My bag</h2>
      {items.length === 0 && <p>Cart is empty</p>}
      {items.map(item => (
        <div key={item.id} className="product">
          <h4>{item.name}</h4>
          <p>Price: ${item.price} | Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(decrement(item.id))}>–</button>
         
        </div>
      ))}
      <h3 className="total">Total: ${total}</h3>
    </div>
  );
};

export default ProductList;
