import * as types from '../actions/actionTypes';

const initState = {
  authenticated: false,
  me: null,
  userView: null,
  cloudImage: null,
  imageUploading: false,
};

export default function(state = initState, action) {
  switch (action.type) {
    case types.AUTH_USER:
      return { ...state, authenticated: true, me: action.payload };
    case types.LOGOUT_USER:
      return { initState };
    case types.SUBMIT_SUCCESS:
      return { ...state, me: action.payload, userView: action.payload };
    case types.IMAGE_UPLOAD_SUCCESS:
      return { ...state, cloudImage: action.payload };
    case types.IMAGE_UPLOAD_LOADING:
      return { ...state, imageUploading: action.payload };
    case types.CLEAR_UPLOAD_IMAGE:
      return { ...state, cloudImage: null };
    case types.EMPLOYEE_DETAILS:
      return { ...state, userView: action.payload };
    case types.ADMIN_EDIT_EMPLOYEE_SUCCESS:
      return { ...state, userView: action.payload };
    default:
      return state;
  }
}