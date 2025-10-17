import React, { Component } from 'react';
import Counter from './Counter.jsx';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 7 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => ({ ...c, value: 0 }));
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <div className="mb-2">
          <button
            onClick={this.handleReset}
            className="btn btn-primary btn-sm"
          >
            Reset All
          </button>
        </div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}       // full object passed
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            <h4>Counter Title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
