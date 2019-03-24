import { combineReducers } from 'redux'
import albums from './albums'
import photos from './photos'
import user from './user'

export default combineReducers({
  albums,
  photos,
  user
})