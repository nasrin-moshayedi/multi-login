import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {applyMiddleware, compose, createStore} from "redux";
import allReducers from "../Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["Reducer"] // which reducer want to store
};

const middleware = [thunk];
// if (process.env.NODE_ENV === "development") {
middleware.push(createLogger());
// }

const pReducer = persistReducer(persistConfig, allReducers);

// default middleware
const Store = createStore(
    // allReducers,
    pReducer,

    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default Store;

export const persistor = persistStore(Store);
