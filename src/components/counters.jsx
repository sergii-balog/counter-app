import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1, product: "Shampoo" },
      { id: 2, value: 1, product: "Jack Daniels Whiskey .75" },
      { id: 3, value: 2, product: "Noodles 1lb" },
      { id: 4, value: 3, product: "Chicken Kyiv" }
    ]
  };
  render() {
    return (
      <div className="container" style={{ backgroundColor: "#efefef" }}>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            product={counter.product}
            value={counter.value}
          >
            {counter.id}.&nbsp;
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
