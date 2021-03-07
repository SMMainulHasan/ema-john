import React from 'react';

const ReviewItems = (props) => {
    const {name, quantity} = props.product;
    return (
        <div>
            <h2>{name}</h2>
            <p>Quantity: {quantity}</p>
            <button className="add-cart-btn">remove</button>
        </div>
    );
};

export default ReviewItems;