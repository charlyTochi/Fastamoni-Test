interface Action {
  type: string;
  payload: any;
}

interface State {
  data: any[];
  loading: boolean;
  error: any;
  user: any;
  success: any;
}

const intialState = {
  data: [],
  loading: false,
  error: null,
  auth: null,
  success: null,
};

export default (state: State = intialState, action: Action) => {
  switch (action.type) {
    case 'AUTH_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        success: action.payload,
        loading: false,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
