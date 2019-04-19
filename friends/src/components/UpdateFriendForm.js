import React from "react";

class UpdateFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age,
      email: this.props.email
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateFriend = () => {
    console.log("update");
  };

  render() {
    return (
      <div>
        <form action="submit">
          <input
            type="text"
            name="name"
            onChange={this.inputChange}
            value={this.state.name}
          />
          <input
            type="text"
            name="age"
            onChange={this.inputChange}
            value={this.state.name}
          />
          <input
            type="text"
            name="email"
            onChange={this.inputChange}
            value={this.state.name}
          />
          <button onClick={this.updateFriend}>Update Your Friend!</button>
        </form>
      </div>
    );
  }
}

export default UpdateFriendForm;
