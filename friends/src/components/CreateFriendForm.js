import React from "react";

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

  createFriend = () => {
    console.log("create");
  };

  render() {
    return (
      <div>
        <form action="submit">
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
            value={this.state.name}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.inputChange}
            value={this.state.name}
          />
          <button onClick={this.createFriend}>Add A Friend!</button>
        </form>
      </div>
    );
  }
}

export default CreateFriendForm;
