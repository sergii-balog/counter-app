import React, { Component } from "react";
import CartItem from "./cartItem";
import CartTotal from "./cartTotal";
import EmptyCart from "./emptyCart";

class Cart extends Component {
  // state = {
  //   showEmptyMessage: false
  // };
  constructor() {
    super();
    this.state = {
      items: this.getItems(),
      showEmptyMessage: false
    };
  }
  handleUndo = () => {
    this.setState({
      items: this.getItems(),
      showEmptyMessage: false
    });
  };
  getItems = () => {
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
          this.state.items.filter(x => x.id === counterId)[0].product +
          "'?"
      )
    ) {
      this.setState({
        items: this.state.items.filter(x => x.id !== counterId),
        showEmptyMessage: this.state.items.length - 1 <= 0
      });
    }
  };
  handleChange = (counterId, count) => {
    let newItems = this.state.items.slice();
    newItems.filter(x => x.id === counterId)[0].value = count > 0 ? count : 0;
    this.setState({
      items: newItems,
      showEmptyMessage: newItems.reduce((a, b) => a + b.value, 0) === 0
    });
  };
  render() {
    return (
      <div className="p-2">
        <div className="container" style={{ backgroundColor: "#f5f5f5" }}>
          <EmptyCart showMessage={this.state.showEmptyMessage} />
          {this.state.items.map((item, i) => (
            <CartItem
              key={item.id}
              item={item}
              onDelete={this.handleDelete}
              onChange={this.handleChange}
            >
              {i + 1}.&nbsp;
            </CartItem>
          ))}
          <CartTotal items={this.state.items} onUndo={this.handleUndo} />
        </div>
      </div>
    );
  }
}

export default Cart;
