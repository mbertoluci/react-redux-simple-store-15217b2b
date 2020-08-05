import {
  ADD_MESSAGE,
  DELETE_MESSAGE
} from "../constants/actionTypes"

const defaultState = {
  count:0,
  messages: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { count: ++state.count , messages:[...state.messages, {key: action.key, value: action.value}]}
    case DELETE_MESSAGE:
      const messages = state.messages.filter(function(item){
        return item.key !== action.key
      })
      return { count: messages.length , messages:[...messages]}
    default:
      return state
  }
}