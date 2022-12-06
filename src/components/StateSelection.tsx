import * as React from 'react';
import { Select, SelectOption } from '@patternfly/react-core';

class StateSelection extends React.Component {
  state = {
    selected: '',
    isExpanded: false
  };

  onSelect = (event: any, selection: string) => {
    this.setState({
      selected: selection,
      isExpanded: false
    });
  };

  onToggle = () => {
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
        <SelectOption value="Massachusetts" onClick={event=>this.onSelect(event, "Massachusetts")} />
        <SelectOption value="Other" onClick={event=>this.onSelect(event, "Other")}/>
      </Select>
    );
  }
}

export default StateSelection