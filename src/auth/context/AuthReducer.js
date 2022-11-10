import { types } from "../types/types";
import PropTypes from "prop-types";
const initialState = {
  logged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
authReducer.propTypes = {
  state: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
};
