import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([])
    const handleEvent = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct= newCart.filter(pd => pd.key=== product.key);
        const count = sameProduct.length;
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;