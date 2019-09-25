import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import rootEpic from './epics/rootEpic';

const epicMiddleware = createEpicMiddleware();
//with observable
export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    return store;
}

// without observable
/*
export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}
*/
