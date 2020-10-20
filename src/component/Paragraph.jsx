import React, { Component } from "react";
import Button from "./Button";

class Paragraph extends Component {
  state = {
    name: "Shivay",
  };
  changeName = (name) => {
    this.setState({
      name: name,
    });
  };
  render() {
    return (
      <div>
        <Button name={this.state.name} changeName={this.changeName} />
      </div>
    );
  }
}

export default Paragraph;
