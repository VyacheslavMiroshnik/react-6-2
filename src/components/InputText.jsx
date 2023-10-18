import { Component } from "react";

export default class InputText extends Component {
  state = {
    text: "",
  };

  handlerInput = (e) => {
    this.setState({ text: e.target.value });
  };

  handlerSend = () => {
    this.props.sendMessage(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="input-form">
        <label>New Note</label>
        <textarea
          className="input-field"
          name="text"
          cols="8"
          rows="5"
          id=""
          value={this.state.text}
          onChange={this.handlerInput}
        ></textarea>
        <button className="btn-send material-icons" onClick={this.handlerSend}>
          send
        </button>
      </div>
    );
  }
}
