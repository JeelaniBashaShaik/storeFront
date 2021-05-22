import { INCREMENT, DECREMENT } from './../types/counter';

const initialState = {
  count: 0
};

export const CountReducer = (state = initialState, action) => {
  console.log('inside reducer');
  switch (action.type) {
    case INCREMENT: {
      const state = { ...state, count: count + 1 };
      return state;
    }
    case DECREMENT: {
      const state = { ...state, count: count - 1 };
      return state;
    }
    default: {
      return state;
    }
  }
};
