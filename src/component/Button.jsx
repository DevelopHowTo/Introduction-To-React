import React, { Children, Component } from "react";

class Button extends Component {
  // state = {
  //   name: "Raghav",
  // };

  // changeName = () => {
  //   this.setState({
  //     name: "Raghav Dhingra",
  //   });
  // };
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={() => this.props.changeName("Hey")}>
          Change Name
        </button>
      </div>
    );
  }
}

export default Button;
