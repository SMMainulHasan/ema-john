import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {key}=useParams();
    // console.log(key);
    const product = fakeData.find(pd=>pd.key=== key);
    // console.log(products);

    return (
        <div>
            <h1> Product details </h1>
            <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default ProductDetail;