import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export class Beta extends React.Component {
  state = {
    temp: true
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.temp !== this.state.temp) {
      return true;
    }

    return false;
  }

  render() {
    const buttonText = this.state.temp ? "true" : "false";

    return (
      <div style={styles}>
        <Hello name="CodeSandbox" />
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
        <button
          onClick={() => {
            console.log(this.state.temp);
            this.setState({
              temp: !this.state.temp
            });
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <button>Test</button>
  </div>
);

render(<Beta />, document.getElementById("root"));
