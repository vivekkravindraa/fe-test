import React from 'react'

export default class ShoppingList extends React.Component {
  constructor(props) {
    const { items } = props;
    super(props);
    this.state = { items };
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(id) {
    let remainingObjects = this.state.items.filter((item) => id !== item.id);
    this.setState({ items: remainingObjects });
  }

  render() {
    return (     
      <ul>
        {this.state.items.map(item =>
          <li key={item.id}>
            {item.name} 
            <button
              id="removeBtn"
              onClick={() => this.removeItem(item.id)} 
              type="button"
            >
              Remove
            </button>
          </li>
        )}
      </ul>
    );
  }
}
