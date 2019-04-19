import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const FRIENDS_SAVED = "FRIENDS_SAVED";
export const SAVING_FRIENDS = "SAVING_FRIENDS";
export const UPDATING_FRIENDS = "UPDATING_FRIENDS";
export const FRIEND_UPDATED = "FRIEND_UPDATED";
export const DELETING_FRIEND = "DELETING_FRIEND";
export const FRIEND_DELETED = "FRIEND_DELETED";
export const ERROR = "ERROR";

export function fetchFriends() {
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios
      .get(`http://localhost:5000/api/friends`)
      .then(({ data }) => {
        //destructering
        console.log(data);
        dispatch({
          type: FRIENDS_FETCHED,
          payload: data
        });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: `Failed: ${error}` });
      });
  };
}

export function saveFriend(friend) {
  return dispatch => {
    dispatch({ type: SAVING_FRIENDS });
    axios
      .post(`http://localhost:5000/api/friends`, friend)
      .then(({ data }) => {
        //destructering
        console.log(data);
        dispatch({
          type: FRIENDS_SAVED,
          payload: data
        });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: `Failed: ${error}` });
      });
  };
}
