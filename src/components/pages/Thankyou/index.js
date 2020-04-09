/**
     * 
     * @name Thankyou Page
     *
     * @description
     * This is the Thankyou page. It opens up when user makes the payment.
     *
     * @author Aman Sharma(amasharma@qasource.com)
     */

import React from 'react';

class Thankyou extends React.Component {
    
    componentDidMount(){
       this.props.removeCart();
    }

    render() {
        const { removeCart } = this.props
        return (
            <section className="main-wrapper">
                <div className="container">
                   <span>Thankyou, Your order has been processed.</span>
                </div>
            </section>
        );
    }
}

export default Thankyou;