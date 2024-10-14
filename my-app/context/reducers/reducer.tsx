import { CLEAR_ALL_VALUES } from "../actions/actions";

const initialState = {};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CLEAR_ALL_VALUES:
      return {};
    default:
      return { ...state, ...action.payload };
  }
};

export default reducer;
