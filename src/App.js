import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import UsersForm from './components/UsersForm.js';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <UsersForm />
      </Provider>
    );
  }
}

export default App;
