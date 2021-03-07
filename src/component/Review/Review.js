import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Review.css';
import happy from '../../images/giphy.gif'


const Review = () => {
    const [cart, setCart] = useState([]);
    
    const [orderPlaced, setOrderPlaced] = useState(false)
        const placeOrder = ()=>{
            setCart([]);
            setOrderPlaced(true);
            processOrder();
        }
    
        const removeProduct = (productKey) => {
            const newCart = cart.filter(pd => pd.key !== productKey);
            setCart(newCart);
            removeFromDatabaseCart(productKey);
        }
    
    useEffect(() => {
        const addedItems = getDatabaseCart();
        const productKey = Object.keys(addedItems);
        
        const cartItems = productKey.map(key => {
            const products = fakeData.find(pd => pd.key === key);
            products.quantity = addedItems[key];
            return products;
        })
        setCart(cartItems);
    }, []);

    let thankyou;
    if(orderPlaced){
    thankyou = <img src={happy} alt=""/>
    }
    return (
        <div className="reviews">
            <div>
            {
                cart.map(pd => <ReviewItems removeProduct={removeProduct} key={pd.key} product={pd}></ReviewItems>)
            }
            {thankyou}
            </div>
            <Cart cart={cart}>
                <button onClick={placeOrder} className= "add-cart-btn"> Order Place</button>
            </Cart>
        </div>
    );
};

export default Review;