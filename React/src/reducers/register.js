import {
  TOGGLE_SIGNUP_FORM,
  TOGGLE_SIGNIN_FORM,
  SET_FIELD_VALUE,
  CHECK_PASSWORD_CONFIRMATION,
  SUBMIT_SIGNUP,
} from '../actions/register';

const initialState = {
  // Display signUp/signIn form
  signUpForm: false,
  signInForm: false,
  // Signup form fields values
  siret: '',
  region: '',
  email: '',
  password: '',
  confirmPassword: '',
  // Password Confirmation
  passwordLength: 0,
  passwordConfirmed: false,
};

const registerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SIGNUP_FORM:
      return  {
        ...state,
        signUpForm: !state.signUpForm,
      };

    case TOGGLE_SIGNIN_FORM:
      return  {
        ...state,
        signInForm: !state.signInForm,
      };

    case SET_FIELD_VALUE:
      if (action.name === 'password') {
        return {
          ...state,
          [action.name]: action.value,
          passwordLength:  state.password.length + 1,
        };
      }
      return  {
        ...state,
        [action.name]: action.value,
      };

    case CHECK_PASSWORD_CONFIRMATION:
      // Password verification
      if (state.passwordLength >= 8 & state.password === state.confirmPassword) {
        return {
          ...state,
          passwordConfirmed: true,
        };
      }
      return  {
        ...state,
        passwordConfirmed: false,
      }

    case SUBMIT_SIGNUP: {
      console.log('signup !')
    }

    default: return state;
  }
};

export default registerReducer;