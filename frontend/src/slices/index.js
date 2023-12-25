import { configureStore } from '@reduxjs/toolkit';
import dealsReducer from './dealsSlice.js'
import studentsReducer from './studentsSlice.js';
import teacherReducer from './teacherSlice.js';


export default configureStore({
    reducer: {
        dealsReducer,
        studentsReducer,
        teacherReducer,
    },
  });