import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <div className="row" style={{ borderBottom: "solid 1px #cacaca" }}>
        <div className="col-sm-4" style={{ verticalAlign: "center" }}>
          <div className="m-2">
            {this.props.children}
            {this.props.counter.product}
          </div>
        </div>
        <div className="col-sm-2">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <span
            className="badge badge-info p-2"
            style={{ borderRadius: "0px" }}
          >
            $ {(this.props.counter.price * this.props.counter.value).toFixed(2)}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => {
              this.props.onChange(
                this.props.counter.id,
                this.props.counter.value + 1
              );
            }}
            className="btn btn-sm btn-secondary m-2"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => {
              this.props.onChange(
                this.props.counter.id,
                this.props.counter.value - 1
              );
            }}
            className="btn btn-sm btn-secondary"
          >
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-sm btn-danger m-2"
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "None" : count;
  }
}

export default CartItem;
