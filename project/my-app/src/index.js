import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reduxThunk from "redux-thunk"; //สามารถretrun obj เป็น functionได้
import reducers from "./reducers";


const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); //สร้างstore

ReactDOM.render(
  <Provider store = {store}> {/* //เซ็ตstoreให้App */}
    <App />
  </Provider>,
  document.getElementById('root')
);



