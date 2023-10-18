import { Component } from "react";

export default class ShowCards extends Component {
  render() {
    return (
      <div className="cards-list">
        {this.props.cards.map((item) => {
          return (
            <div className="cards" key={item.id}>
              <div className="cards-content">
                <span>{item.content}</span>
              </div>
              <button
                className="btn-del material-icons"
                onClick={() => this.props.onDelete(item.id)}
              >
                close
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
