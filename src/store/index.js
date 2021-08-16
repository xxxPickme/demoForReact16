import { createStore,applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from'redux-thunk'

const enThunk = applyMiddleware(thunk)
const demoStore = createStore(reducer,enThunk)


export default demoStore


