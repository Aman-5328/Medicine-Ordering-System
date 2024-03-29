/**
     * 
     * @name Route
     *
     * @description
     * The route file set the routing of pages.
     *
     * @author Aman Sharma(amasharma@qasource.com)
     */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headers from './components/pages/Common/header'
import Footers from './components/pages/Common/footer'
import {
    Landing,
    Checkout,
    Thankyou,
} from './components/pages';

export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartValue: localStorage.getItem('cartValue') ? JSON.parse(localStorage.getItem('cartValue')) : []
        }
    }

    /* Adds item into the cart.*/

    addToCart = (item, id,  value = null) => {
        const { cartValue } = this.state
        if(cartValue.findIndex(item => item.id === id) !== -1) {
            if(value !== null ) {
                cartValue[cartValue.findIndex(item => item.id === id)].qty = Number.parseInt(value, 10)                
            } else {
                cartValue[cartValue.findIndex(item => item.id === id)].qty += 1
                }
        } else {
            cartValue.push({
                id:item.id,
                name : item.name,
                image : item.image,
                price : item.price,
                qty: 1
                
            });
        }
        this.setState({
            cartValue
        }, () => {
            localStorage.setItem('cartValue',JSON.stringify( cartValue))
            toast.success("Item added Successfully");
        })
    }

    /*Delete item from the product */

    deleteToCart = (item, id ) => {
        const { cartValue } = this.state
        cartValue.splice([cartValue.findIndex(item => item.id === id)], 1);
        this.setState({
            cartValue
        }, () => {
            localStorage.setItem('cartValue',JSON.stringify( cartValue))
            toast.success("Item Deleted Successfully");
        })
    }

    /* empty the card on thankyou page */

    removeCart=()=>{
        this.setState({cartValue:[]})
        localStorage.clear();
    }


    render() {
        const {cartValue} = this.state
        return (
            <div>
                <ToastContainer />
                <Router>
                <Headers cartValue={cartValue}/>
                    <Switch>
                        <Route exact path="/" render={(props) => <Landing addToCart={this.addToCart} {...props}/>} />
                        <Route exact path="/thankyou" render={(props) => <Thankyou removeCart={this.removeCart} cartValue={cartValue} {...props}/>} />
                        <Route exact path="/checkout" render={(props) => <Checkout deleteToCart={this.deleteToCart} addToCart={this.addToCart} cartValue={cartValue} {...props}/>} />
                    </Switch>
                    <Footers />
                </Router>
            </div>
        );
    }
}