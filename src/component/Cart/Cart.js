import React from 'react';
import './cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const convertToNumber = num => {
        const decimelTwo = num.toFixed(2)
        return Number(decimelTwo);
    }
    const productPrice = cart.reduce((total, product) => total + product.price*product.quantity, 0);
    // let productPrice = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     productPrice = productPrice + product.price;
    // }

    let shipping = 0;
    if (productPrice > 35) {
        shipping = 0;
    }
    else if (productPrice > 15) {
        shipping = 4.99;
    }
    else if (productPrice > 0) {
        shipping = 12.99;
    };

    const tax = productPrice/10;

    const grandTotal =productPrice+tax+shipping;
    return (
        <div>
            <h4>Order summery</h4>
            <p>Added Items: {cart.length}</p>
            <p>Product Price: {productPrice}</p>
            <p>Shipping cost: {convertToNumber(shipping)}</p>
            <p>Tax + Vat: {convertToNumber(tax)}</p>
            <p><strong>Total Price:</strong> {convertToNumber(grandTotal)}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;