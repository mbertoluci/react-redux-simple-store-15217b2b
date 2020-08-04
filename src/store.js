import { createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export const store = createStore(reducer, composeWithDevTools());
