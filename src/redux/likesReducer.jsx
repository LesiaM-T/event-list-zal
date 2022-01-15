import { INCREMENT, DECREMENT, GET_LIKES } from './types';

const intialState = {
  likes: 0,
};

const likesReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: action.likes + 1,
      };
    case DECREMENT:
      return {
        ...state,
        likes: action.likes - 1,
      };

      case GET_LIKES:
        return{
          ...state
        }

    default:
      return state;
  }
};



export default likesReducer;
