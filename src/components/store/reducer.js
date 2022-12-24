import {
  GET_LOGIN,
  GET_DATA_SUCCESS,
} from "./actionTypes.js";

const init = {
  engine: {
    data: [],
  },
  filtered : {}
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_LOGIN:
      return {
        ...store,
        login: {
          ...store.login,
          data: payload,
        },
      };
      case GET_DATA_SUCCESS:
        return {
          ...store,
          login: {
            ...store.login,
            data: payload,
          },
        };

      
    default:
      return { ...store };
  }
};