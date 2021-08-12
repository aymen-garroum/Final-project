import { product_reducer } from "../reducers/product_reducer";
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(product_reducer, composeEnhancers(applyMiddleware(thunk)))