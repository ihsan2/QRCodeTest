import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './user';

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  blacklist: ['loading'],
};

const rootReducer = combineReducers({
  userReducer: persistReducer(userPersistConfig, userReducer),
});

export default rootReducer;
