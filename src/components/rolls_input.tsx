import React, { Component } from 'react';

interface RollsInputState { rolls: string; };
interface RollsInputProps { onRollsNumberChange: (rolls: string) => void};

class RollsInput extends Component<RollsInputProps, RollsInputState> {
  constructor(props: RollsInputProps) {
    super(props);

    this.state = { rolls: '' };
  }

  onInputChange(rolls: string) {
    this.setState({ rolls });
    this.props.onRollsNumberChange(rolls);
  }

  render() {
    return (
      <div className="rolls-input">
        <input
          value={this.state.rolls}
          onChange={e => this.onInputChange(e.target.value)} />
      </div>
    );
  }
}

export default RollsInput;
