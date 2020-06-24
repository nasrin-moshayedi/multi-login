import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {applyMiddleware, compose, createStore} from "redux";
import allReducers from "../Reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const middleware = [thunk];
// if (process.env.NODE_ENV === "development") {
middleware.push(createLogger());
// }


// default middleware
const Store = createStore(
    allReducers,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default Store;

