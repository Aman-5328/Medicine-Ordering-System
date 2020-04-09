import React from 'react';
import { products } from '../../../utils/const.js'

class Landing extends React.Component {
    
    render() {
        const { addToCart } = this.props;
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
}

export default Landing;