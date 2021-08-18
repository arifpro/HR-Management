import { combineReducers } from 'redux';
import employee from './employee.reducer';
import mail from './mail.reducer';

const rootReducer = combineReducers({
    employee,
    mail,
});

console.log(rootReducer);

export default rootReducer;
