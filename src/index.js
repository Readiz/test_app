import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';

/*
 * Action
 */
const INCREMENT = "INCREMENT";
function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    };
}
/*
 * Reducer
 */
const initialState = {
    value: 0
};
const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        default:
            return state;
    }
}
/*
 * Store
 */
const store = createStore(counterReducer);

//const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);

const render = () => {
    
    const appElement = document.getElementById('root');
    ReactDOM.render(
        <App store={store}/>,
        appElement
    );
};

store.subscribe(render);
render();