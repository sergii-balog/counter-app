import React, { Component } from "react";

class EmptyCart extends Component {
  render() {
    if (this.props.showMessage) {
      return <h5 style={{ textAlign: "center" }}>Your cart is empty</h5>;
    }
    return null;
  }
}

export default EmptyCart;
