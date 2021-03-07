import React from 'react';

const ReviewItems = (props) => {
    const { name, quantity, key } = props.product;
    // console.log(key);

    return (
        <div>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <button onClick={() => props.removeProduct(key)} className="add-cart-btn">remove</button>
        </div>
    );
};

export default ReviewItems;