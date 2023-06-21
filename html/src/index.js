import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux';


const defaultState = {
    isAdmin: false,
    iaAuth: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

const store = new createStore()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
