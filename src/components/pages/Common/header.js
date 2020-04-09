import React from 'react';
import { withRouter, Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        const { cartValue } = this.props
        let total = 0 
        cartValue && cartValue.map((item) => {
            total = item.qty + total
        })
        return (
            <header id="header" className="cs-header">
                <div className="header-middle">
                    <div className="container">
                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                            <a className="navbar-brand" href="#">Logo</a>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/checkout" className="nav-link">checkout</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/checkout" className="nav-link cart-btn" href="#"><i className="iocn-ui">
                                        <img src="https://img.icons8.com/ios-glyphs/24/000000/shopping-cart.png" /></i>
                                        <span className="counter">{cartValue.length}
                              </span></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;