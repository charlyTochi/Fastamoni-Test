interface Action {
  type: string;
  payload: any;
}

interface State {
  data: any[];
  loading: boolean;
  error: any;
}

const intialState = {
  data: [],
  loading: false,
  error: null,
};

export default (state: State = intialState, action: Action) => {
  switch (action.type) {
    case 'HOME_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'HOME_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'HOME_SUCCESS':
      return {
        ...state,
        success: action.payload,
        loading: false,
      };
    case 'NOTIFICATION_SUCCESS':
      return {
        ...state,
        notification: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
