import React from 'react';
import Button from "./components/Button";
import "./App.css";

interface AppProps {
  message?: string;
};
interface AppState {
  count: number;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="app">
        <div>
          <div className="count">
            <h3>Count:</h3>
            <h1>{this.state.count}</h1>
          </div>
          <div className="buttons">
            <Button title={"-"} action={this.decrement} />
            <Button title={"+"} action={this.increment} />
          </div>
        </div>
      </div>
    );
  }
};

export default App;