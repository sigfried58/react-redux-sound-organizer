import { combineReducers } from 'redux';
import soundsReducer from './sounds_reducer'
//import manageSounds from './manage_sounds'

const rootReducer = combineReducers({
  sounds: soundsReducer
})


export default rootReducer;
