import { createStore, applyMiddleware, compose } from 'redux';
import { combineForms } from 'react-redux-form';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineForms({
  otherForm: { foo: 'bar'},
  usersForm: {
  	users: []
  }
}), composeEnhancers(applyMiddleware(thunk)));

export default store;