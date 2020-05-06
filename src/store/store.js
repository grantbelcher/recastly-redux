import { createStore, applyMiddleware } from 'redux';
import composeWithDevTools from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
// const initialState = []

const initialState = {};
const middleware = [thunk];

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
const store = createStore(rootReducer, applyMiddleware(thunk));

module.exports = store;

