import React from "react";
import { connect } from "react-redux";
import { saveFriend } from "../actions/";

class CreateFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createFriend = e => {
    e.preventDefault();
    console.log({ ...this.state });
    this.props.saveFriend({ ...this.state });
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.createFriend}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.inputChange}
            value={this.state.name}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={this.inputChange}
            value={this.state.age}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.inputChange}
            value={this.state.email}
          />
          <button type="submit">Add A Friend!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { saveFriend }
)(CreateFriendForm);
