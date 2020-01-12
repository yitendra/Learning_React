import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//for Redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './store/reducers/reducer1'

let store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
