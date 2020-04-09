/**
     * 
     * @name Landing Page
     *
     * @description
     * This is the landing page which opens when we start project.It contains list of all products and their option for add to cart.
     *
     * @author Aman Sharma(amasharma@qasource.com)
     */

import React from 'react';
import { products } from '../../../utils/const.js'

const Landing = (props) => {
        const { addToCart } = props;
        return (
            <section className="main-wrapper">
                <div className="container">
                    <div className="row">
                        {products && products.map((item, index) => (
                            <div className="col-md-3" key={index}>
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center" >
                                            <img src={item.image} alt="" />
                                            <h2>${item.price}</h2>
                                            <p>{item.name}</p>
                                            <button onClick={() => { addToCart(item,item.id ) }} className="btn btn-default add-to-cart">
                                                <i className="fa fa-shopping-cart"></i>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
export default Landing;