import React from "react";
import { connect } from "react-redux";
import { updateFriend } from "../actions";

class UpdateFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      id: ""
    };
  }

  //populate friend data
  componentDidMount() {
    //get the friends list from state, filter based on params.id, destruct it to a single obj
    const [friend] = this.props.friends.filter(
      friend => `${friend.id}` === this.props.match.params.id
    );
    //spread friend over state to populate form
    this.setState({
      ...friend
    });
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateFriend = e => {
    e.preventDefault();
    console.log("update");
    this.props.updateFriend({ ...this.state });
    this.setState({
      name: "",
      age: "",
      email: "",
      id: ""
    });
    this.props.history.push("/");
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
            value={this.state.age}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.inputChange}
            value={this.state.email}
          />
          <button onClick={this.updateFriend}>Update Your Friend!</button>
        </form>
      </div>
    );
  }
}

const mstp = ({ friendsReducer: state }) => {
  return {
    friends: state.friends,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated
  };
};

export default connect(
  mstp,
  { updateFriend }
)(UpdateFriendForm);
