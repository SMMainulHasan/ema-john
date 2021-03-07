import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const saveProduct = getDatabaseCart();
        const productKeys = Object.keys(saveProduct);

        const cartItems = productKeys.map( key => {
            const cartProduct = fakeData.find(pd => pd.key === key );
            cartProduct.quantity = saveProduct[key];
            return cartProduct;
        });
        setCart(cartItems);
    }, [])


    const handleEvent = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const other = cart.filter(pd => pd.key !== product.key);
            newCart = [...other, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        };
        setCart(newCart);
        addToDatabaseCart(product.key, count)
    };

    return (

        <div className="shop-container">
            <div className="master">
                <div className="products">
                    {
                        products.map(pd => <Product
                            key={pd.key}
                            showAddToCart={true}
                            handleEvent={handleEvent}
                            product={pd}>
                        </Product>)
                    }
                </div>
            </div>
            <div className="cart">
                <Cart cart={cart}>
                    <Link to="/review">
                    <button className="add-cart-btn"> order review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;