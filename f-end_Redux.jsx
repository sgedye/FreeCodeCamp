// Redux Counter Reducer
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Redux Authentication Reducer
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return { authenticated: true };
    case LOGOUT:
      return { authenticated: false };
    default:
      return state;
  }
};

// Redux Combine Reducers
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);


//REVISION
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
// define constants for increment/decrement action types

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return (state += 1);
        case DECREMENT:
            return (state -= 1);
        default:
            return state;
    };
};
// define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => { return {type: INCREMENT}; }; 
const decAction = () => { return {type: DECREMENT}; }; 
// define action creators for incrementing/decrementing

const store = Redux.createStore(counterReducer); 
// define the Redux store here, passing in your reducers
