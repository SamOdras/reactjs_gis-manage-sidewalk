import  {combineReducers}  from 'redux';
import { reducer as FormReducer } from 'redux-form';
import trotoar from './trotoar.reducer';
import sign from './signIn_signUp';
export default combineReducers({
  form: FormReducer,
  dataTrotoar: trotoar,
  userAuth: sign,
});