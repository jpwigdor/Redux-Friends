import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  SAVING_FRIENDS,
  FRIENDS_SAVED,
  UPDATING_FRIENDS,
  FRIEND_UPDATED,
  ERROR
} from "../actions/index";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        fetchingFriends: true,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: [],
        error: null
      };
    case FRIENDS_FETCHED:
      return {
        fetchingFriends: false,
        friendsFetched: true,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: action.payload,
        error: null
      };
    case SAVING_FRIENDS:
      return {
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: true,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: state.friends,
        error: null
      };
    case FRIENDS_SAVED:
      return {
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: true,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: action.payload,
        error: null
      };
    case UPDATING_FRIENDS:
      return {
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: true,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: [],
        error: null
      };
    case FRIEND_UPDATED:
      return {
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: true,
        deletingFriend: false,
        friendDeleted: false,
        friends: action.payload,
        error: null
      };
    case ERROR:
      return {
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: state.friends,
        error: action.payload
      };
    default:
      return state;
  }
};
