import {combineReducers} from 'redux'

import words from './words'
import search from './search'
import details from './details'

export default combineReducers({
  words,
  search,
  details
})
