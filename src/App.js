import React, { Component } from 'react';
class Vote extends Component {
  state = {
    content: [
      { count: 0, subject: 'PHP', id: 1 },
      { count: 0, subject: 'Python', id: 2 },
      { count: 0, subject: 'C++', id: 3 },
      { count: 0, subject: 'Java', id: 4 },
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
        <h3>Vote Your Language!</h3>
        <span className="spanClass">
          {this.state.content.map((x) => {
            return (
              <div>
                <table className="tclass">
                  <tr className="trclass">
                    <td className="tdcount">{x.count}</td>
                    <td className="tdsubject">{x.subject}</td>
                    <td className="tdbutton">
                      <button
                        className="buttonclass"
                        onClick={() => this.handleClick(x)}
                      >
                        Vote Here
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
