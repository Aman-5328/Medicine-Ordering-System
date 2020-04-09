import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router-dom';
import { discountCoupn } from '../../../utils/const'

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discountCoupnInput: '',
      discountAmount: 0,
      applyStatus: false,
    }
  }

  orderSubmitted = () => {
    this.props.history.push('/thankyou')
  }

  applyCoupon = () => {
    const {discountCoupnInput} = this.state 
   if (discountCoupn.findIndex(item => item.name === discountCoupnInput) !== -1 ){
      this.setState({
        discountAmount: discountCoupn[discountCoupn.findIndex(item => item.name === discountCoupnInput)].price,
        applyStatus: true
      })
      toast.success("Coupon applied successfully");
   } else {
     this.setState({
      discountAmount: 0,
      applyStatus: false
     })
    toast.error("Invalid coupon !");
   }
  }

  reset = () => {
    this.setState({
      discountAmount: 0,
      discountCoupnInput: '',
      applyStatus: false
     })
     toast.success("Coupon removed successfully");
  }

  render() {
    const { cartValue, addToCart, deleteToCart } = this.props
    const {discountCoupnInput, discountAmount, applyStatus } = this.state 
    let total = 0
    let amount = 0
    cartValue && cartValue.map((item) => {
      total = item.qty + total
      amount = (item.qty * item.price) + amount
    })
    
    return (
      <section className="main-wrapper">
        <div className="container">
          <div className="row">
            <table className="table table-condensed">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartValue.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td><input type="number" value={item.qty} onChange={(e) => { addToCart(item, item.id, e.target.value) }} min="1" /></td>
                    <td>${item.qty * item.price}</td>
                    <td><img onClick={() => {
                      deleteToCart(item, item.id)
                    }} src="https://img.icons8.com/windows/2x/delete-forever.png" width="25px" /></td>
                  </tr>
                ))}

              <tr>
                  <td><input type="text" value={discountCoupnInput} onChange={(e) =>{
                    this.setState({
                      discountCoupnInput: e.target.value
                    })
                  }} />   <button onClick={() => {
                    applyStatus ? this.reset() : this.applyCoupon()
                  }} type="button" className="btn btn-success"> {applyStatus ? 'Remove' : 'Apply'} </button></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td><b>Total :</b> $ {(amount) * ((100-discountAmount)/100) }</td>
                  <td></td>
                </tr>
                <tr>
                  <button onClick={() => {
                    this.orderSubmitted()
                  }} type="button" className="btn btn-success">Pay By Cash</button>
                   <ToastContainer />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Checkout);