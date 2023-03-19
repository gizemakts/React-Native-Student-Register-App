
import { combineReducers } from 'redux';
import kimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import StudentListReducers from './StudentsCreateReducer';
import StudentDataReducers from './StudentDataReducers';
import StudentUpdateReducers from './StudentUpdateReducers';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducers,
  studentListResponse: StudentListReducers,
  studentDataResponse: StudentDataReducers,
  studentUpdateResponse: StudentUpdateReducers
});