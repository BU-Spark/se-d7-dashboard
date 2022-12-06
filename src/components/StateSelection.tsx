import * as React from 'react';
import { Select, SelectOption, SelectOptionObject } from '@patternfly/react-core';

class StateSelection extends React.Component {
  state = {
    selected: '',
    isExpanded: false
  };

  // Create a function that takes a string
  onSelect = (selection: string) => {
    this.setState({
        selected: selection,
        isExpanded: false
    });
  };

  onToggle = () => {
    console.log(this.state.isExpanded)
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { selected, isExpanded } = this.state;

    return (
      <Select
        id="select"
        onToggle={this.onToggle}
        isOpen={isExpanded}
        placeholderText="Select a value"
        aria-label="Select a value"
        selections={selected}
        isGrouped
      >
        <SelectOption value="Massachusetts" onClick={event=>this.onSelect("Massachusetts")} />
        <SelectOption value="Other" onClick={event=>this.onSelect("Other")}/>
      </Select>
    );
  }
}

export default StateSelection