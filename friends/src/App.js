import React, { Component } from "react";
import { Route } from "react-router-dom";
import FriendListView from "./views/FriendListView";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={FriendListView} />
      </div>
    );
  }
}

export default App;
