import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);

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
    return (
        <div>
            <h1>review: {cart.length}</h1>
            {
                cart.map(pd=> <ReviewItems key={pd.key} product={pd}></ReviewItems> )
            }
        </div>
    );
};

export default Review;