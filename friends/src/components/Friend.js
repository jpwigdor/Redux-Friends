import React from "react";
import { Link } from "react-router-dom";

const Friend = props => {
  return (
    <li>
      <div>
        <h4>{props.friend.name}</h4>
        <p>{props.friend.age}</p>
        <p>{props.friend.email}</p>
        <Link to={`/friends/${props.friend.id}/update`}>Update</Link>
      </div>
    </li>
  );
};

export default Friend;
