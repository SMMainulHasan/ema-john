import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { name, img, price, stock, seller, key} = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h4><Link to={"/product/" + key}>{name}</Link></h4>
                <p>By {seller}</p>
                <p>Only {stock} left -Oder soon</p>
                <h4>${price}</h4>
                <button
                    onClick={() => props.handleEvent(props.product)}
                    className="add-cart-btn">
                    <FontAwesomeIcon icon={faCartPlus} /> add to cart
                    </button>
            </div>
        </div>
    );
};

export default Product;