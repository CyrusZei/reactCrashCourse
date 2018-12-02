import React, { Component } from 'react';
import Dumb from './Dumb';
import Form from './Form';

class Smart extends Component {
  constructor() {
    super();
    this.state = { list: [], itemValue: '', itemEdit: '', itemEditIndex: '' };
  }

  handleInputValue = (e, itemKey) => {
    this.setState({ [itemKey]: e.target.value });
  };

  handleAddItemClick = () => {
    const state = { ...this.state };

    state.list.push(this.state.itemValue);
    state.itemValue = '';
    console.log('state', state);

    this.setState({ ...state });
  };

  handleRemoveItem = index => {
    const state = { ...this.state };

    const listItem = state.list[index];
    console.log('_______item', listItem);

    state.list.splice(listItem, 1);

    this.setState({ ...state });
  };

  handleEditItem = index => {
    const state = { ...this.state };
    state.itemEdit = state.list[index];
    state.itemEditIndex = index;
    this.setState({ ...state });
  };

  handleUpdateItemClick = () => {
    const state = { ...this.state };
    state.list[state.itemEditIndex] = state.itemEdit;

    this.setState({ ...state });
  };

  render() {
    return (
      <div>
        <h1>My List</h1>
        <Dumb
          listItemData={this.state.list}
          removeItem={this.handleRemoveItem}
          editItem={this.handleEditItem}
        />
        <Form
          handleInputValue={this.handleInputValue}
          handleAddItemClick={this.handleAddItemClick}
          handleUpdateItemClick={this.handleUpdateItemClick}
          stateData={this.state}
        />
      </div>
    );
  }
}
export default Smart;
