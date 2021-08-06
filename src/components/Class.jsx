import React, { Component } from "react";
import axios from "../axios";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: [],
    };
  }
  showName(user) {
    return <div key={user.id}>{user.name}</div>;
  }
  async process() {
    try {
      const response = await axios.get("/");
      if (response.status == 200) {
        const { data } = response.data;
        await sleep(3000);
        this.setState({ users: data });
        console.log("Process Function");
        this.setState({ loading: false });
      } else {
        console.log("ERROR");
        throw new Error(`${response.status}`);
      }
    } catch (err) {
      console.log(err);
    }
  }
  update() {
    this.setState({
      users: [
        { id: 1, name: "Vaidhya" },
        { id: 2, name: "Prakash" },
        { id: 3, name: "Ram" },
        { id: 4, name: "Kumar" },
      ],
    });
    console.log("Update Function");
  }
  async componentDidMount() {
    await this.process();
    this.update();
  }
  //   componentDidUpdate() {
  //     this.state.users.map(this.showName);
  //   }
  render() {
    return (
      <div>
        <h1>
          {this.state.loading ? "Loading" : this.state.users.map(this.showName)}
        </h1>
      </div>
    );
  }
}

export default Class;
