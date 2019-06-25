import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    product: this.props.product
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.state.count > 1
      ? this.setState({ count: this.state.count - 1 })
      : this.setState({ count: 0 });
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <span className="m-2">
            {this.props.children}
            {this.state.product}
          </span>
        </div>
        <div className="col-sm-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={this.handleIncrement}
            className="btn btn-sm btn-secondary m-2"
          >
            +
          </button>
          <button
            onClick={this.handleDecrement}
            className="btn btn-sm btn-secondary"
          >
            -
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
