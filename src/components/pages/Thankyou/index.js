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