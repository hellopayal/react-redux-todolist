import { legacy_createStore as createStore} from 'redux';
import rootReducers from "./reducers/index";

const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

export default store;
 