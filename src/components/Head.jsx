import { Component } from "react";

export default class Head extends Component {
  render() {
    return (
      <div className="head">
        <div className="crud-title">Notes</div>
        <button
          className="btn-update material-icons"
          onClick={this.props.handlerUpdate}
        >
          autorenew
        </button>
      </div>
    );
  }
}
