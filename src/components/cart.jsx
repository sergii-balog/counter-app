import React, { Component } from "react";
import CartItem from "./cartItem";

class Cart extends Component {
  // state = {
  //   counters: []
  // };
  constructor() {
    super();
    this.state = {
      counters: this.getInitialState()
    };
  }
  handleUndo = () => {
    this.setState({
      counters: this.getInitialState()
    });
  };
  getInitialState = () => {
    return [
      { id: 1, value: 1, product: "Shampoo", price: 3.78 },
      { id: 2, value: 1, product: "Jack Daniels Whiskey .75", price: 24.3 },
      { id: 3, value: 2, product: "Noodles 1lb", price: 2.08 },
      { id: 4, value: 3, product: "Chicken Kyiv", price: 12.9 }
    ];
  };
  handleDelete = counterId => {
    if (
      window.confirm(
        "Are you sure you want to delete '" +
          this.state.counters.filter(x => x.id === counterId)[0].product +
          "'?"
      )
    ) {
      this.setState({
        counters: this.state.counters.filter(x => x.id !== counterId)
      });
    }
  };
  handleChange = (counterId, count) => {
    let tempCounters = this.state.counters.slice();
    tempCounters.filter(x => x.id === counterId)[0].value =
      count > 0 ? count : 0;
    this.setState({
      counters: tempCounters
    });
  };
  render() {
    return (
      <div className="p-2">
        <div className="container" style={{ backgroundColor: "#f5f5f5" }}>
          {this.state.counters.map(counter => (
            <CartItem
              key={counter.id}
              counter={counter}
              onDelete={this.handleDelete}
              onChange={this.handleChange}
            >
              {counter.id}.&nbsp;
            </CartItem>
          ))}
          <div
            className="badge badge-info float-right m-2 p-2"
            style={{ borderRadius: "0px" }}
          >
            Total: $
            {this.state.counters
              .reduce((a, b) => a + b.value * b.price, 0)
              .toFixed(2)}
          </div>
          <button
            className="btn btn-warning foat-left m-2"
            onClick={this.handleUndo}
            title="Reload"
          >
            <i className="fa fa-undo" />
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
