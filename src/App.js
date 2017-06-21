import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './redux/store.js';

import ListForm from './components/ListForm.js';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Provider store={ store }>
          <ListForm />
        </Provider>
      </div>
    );
  }
}

export default App;
