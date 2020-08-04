import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_FIELD_MESSAGE,
  CLEAR_FIELD_MESSAGE
} from '../constants/actionTypes';

const defaultState = {
  count:0,
  messages: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { count: ++state.count , messages:[{key: action.key, value: action.value}, ...state.messages]};
    case DELETE_MESSAGE:
      const messages = state.messages.filter(function(item){
        return item.key !== action.key;
      })
      return { count: messages.length , messages:[...messages]};
    case UPDATE_FIELD_MESSAGE:
      return { ...state, [action.key]: action.value };
    case CLEAR_FIELD_MESSAGE:
      return { ...state, [action.key]: "" };
    default:
      return state;
  }
}