import { combineReducers } from 'redux'

import authReducer from './ducks/auth'
import channelReducer from './ducks/channel'

const rootReducer = combineReducers({
  auth: authReducer,
  channel: channelReducer,
})

export default rootReducer
