import { combineReducers } from 'redux'

import error from './error'
import auth from './auth'
import currentHash from './hash'

export default combineReducers({
    error,
    auth,
    currentHash
})