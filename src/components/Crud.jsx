/* eslint-disable react-hooks/exhaustive-deps */
import { Component } from "react";
import Head from "./Head";
import InputText from "./InputText";
import ShowCards from "./ShowCards";

export default class Crud extends Component {
  state = {
    cards: [],
  };
  constructor(props) {
    super(props);
    this.url = props.url;
    this.id = 0;
  }

  componentDidMount() {
    this.loadData();
  }

  send = (text) => {
    if (text === "") {
      throw new Error("Поле не может быть пустым");
    }
    this.sendData(text);
  };

  sendData = (text) => {
    this.id++;
    fetch(this.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.id,
        content: text,
      }),
    }).then(this.loadData);
  };

  loadData = () => {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cards: data });
      });
  };

  removeData = (id) => {
    fetch(`${this.url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this.loadData);
  };

  handlerDelete = (e) => {
    this.removeData(e.target.dataset.id);
  };

  handlerUpdate = () => {
    this.loadData();
  };

  render() {
    return (
      <>
        <Head handlerUpdate={this.handlerUpdate} />
        <ShowCards cards={this.state.cards} onDelete={this.removeData} />
        <InputText sendMessage={this.send} />
      </>
    );
  }
}
