import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../src/Styles/bootstrap.min.css";
import '../src/Styles/style.css';
import {BrowserRouter} from "react-router-dom";
import Store, {persistor}  from "./Redux/Store/Store";
import {PersistGate} from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";


ReactDOM.render(
    <Provider store={Store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

