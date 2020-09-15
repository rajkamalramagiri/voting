import React, { Component } from 'react';
class Vote extends Component {
  state = {
    content: [
      { count: 1, subject: 'PHP', id: 1 },
      { count: 1, subject: 'Pythhon', id: 2 },
      { count: 1, subject: 'Go', id: 3 },
      { count: 1, subject: 'Java', id: 4 },
    ],
  };
  handleClick = (contentn) => {
    const content = [...this.state.content];
    const index = content.indexOf(contentn);
    console.log(index);
    content[index].count++;
    this.setState({ content });
    console.log(this.state.content[index].count);
  };

  render() {
    return (
      <div className="divClass">
        <h1>Vote Your Language!</h1>
        <span className="spanClass">
          {this.state.content.map((x) => {
            return (
              <div>
                <table className="tclass">
                  <tr className="trclass">
                    <td className="tdclass">{x.count}</td>
                    <td className="tdclass">{x.subject}</td>
                    <td className="tdclass">
                      <button
                        className="buttonclass"
                        onClick={() => this.handleClick(x)}
                      >
                        Click Here
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            );
          })}
        </span>
      </div>
    );
  }
}

export default Vote;
