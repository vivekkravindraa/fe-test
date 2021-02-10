import React from 'react';

export default class OptionsShower extends React.Component {
  constructor(props) {
    super(props);
    const { options } = props;
    this.state = { options, displayOptions: false };
  }

  displayOptions() {
    this.setState((prevState) => ({
      options: this.state.options,
      displayOptions: !prevState.displayOptions
    }));
  }

  render() {
    var options = null;
    if (this.state.displayOptions) {
      options = (
        <ul id="options">
          {this.state.options.map(option => (
              <li key={option.id}>{option.title}</li>
          ))}
        </ul>
      );
    }

    return (
      <div>
        <button onClick={() => this.displayOptions()}>
          {this.state.displayOptions ? "Hide options" : "Show options"}
        </button>
        {options}
      </div>
    );
  }
}
