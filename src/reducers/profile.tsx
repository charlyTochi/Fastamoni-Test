interface Action {
  type: string;
  payload: any;
}

interface State {
  data: any;
  loading: boolean;
  error: any;
  success: any;
}

const intialState = {
  data: [],
  loading: true,
  error: null,
  success: null,
};

export default (state: State = intialState, action: Action) => {
  switch (action.type) {
    case 'PROFILE_LOADING':
      return {
        ...state,
        data: action.payload,
      };
    case 'PROFILE_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        updateSuccess: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
