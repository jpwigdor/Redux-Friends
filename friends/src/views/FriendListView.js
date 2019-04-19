import React from "react";
import { connect } from "react-redux";

import { FriendList, CreateFriendForm } from "../components";
// import actions
import { fetchFriends } from "../actions/index";

class FriendListView extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    // call our action
    this.props.fetchFriends();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <p>FETCHING DATA...</p>;
    }
    return (
      <div>
        <FriendList friends={this.props.friends} />
        <CreateFriendForm />
      </div>
    );
  }
}

const mstp = ({ friendsReducer: state }) => {
  return {
    friends: state.friends
  };
};

export default connect(
  mstp,
  { fetchFriends }
)(FriendListView);
