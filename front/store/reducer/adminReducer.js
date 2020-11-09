import { SEARCH_USERS} from "../constants";

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};
