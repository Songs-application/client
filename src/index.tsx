import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { compose } from '@mui/system';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore, legacy_createStore, Store } from 'redux';
import { reducerSong } from './store/reducers';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(combineReducers({ reducerSong }),applyMiddleware(thunk));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
