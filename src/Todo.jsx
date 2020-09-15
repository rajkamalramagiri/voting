import React, { Component } from 'react';
class Todo extends Component {
  state = {
    a: ['lunch', 'dinner'],
    b: '',
  };
  handleChange = (e) => {
    const x = e.target.value;
    this.setState({ b: x });
    // this.setState({ a: [1, 2] })
  };
  onDelete = (e) => {
    const x = e.target.value;
    const list = [...this.state.a];
    list.splice(x, 1);
    //delete list[x]
    this.setState({ a: list });
  };

  handleClick = () => {
    this.setState({ a: [...this.state.a, this.state.b] });
  };
  render() {
    return (
      <div>
        <h1>My Todo list Application</h1>
        {this.state.a.map((x, i) => (
          <div>
            <p>
              {x}
              {`     `}
              <button onClick={this.onDelete} value={i}>
                delete
              </button>
            </p>
          </div>
        ))}
        <label>
          {' '}
          add your duty
          <br />
        </label>
        <input type="text" onChange={this.handleChange} name="todo" />
        <button type="submit" onClick={this.handleClick}>
          Add to list
        </button>
      </div>
    );
  }
}

export default Todo;
