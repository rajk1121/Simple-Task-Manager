import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import state from './reducers';
let store = createStore(state);
function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();

